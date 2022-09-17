import React from 'react';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            author: "",
            color: {},
            quotes: []
        }
        this.clickNewQuote = this.clickNewQuote.bind(this);
    }

    componentDidMount() { // upon loading the webpage
        fetch("https://type.fit/api/quotes")
        .then((response) => {
            return response.json();
        })
        .then(
            (result) => {
                const quote = getRandomQuote(result);
                const color = getRandomColor();
                this.setState({
                    text: quote.text,
                    author: quote.author,
                    color: color,
                    quotes: result
                });
            }
        )
    }

    clickNewQuote (){ // upon clicking the "New Quote" button
        const newQuote =  getRandomQuote(this.state.quotes);
        const newColor = getRandomColor();
        this.setState({
            text: newQuote.text,
            author: newQuote.author,
            color: newColor
        });
    }

    render() {
        document.getElementById("container").style.backgroundColor = this.state.color;

        return (
            <div>
                <br />
                <h1 id="text">"{this.state.text}"</h1>
                <br />
                <h3 id="author">- {this.state.author}</h3>
                <br />
                <div class="row">
                    <div class="col-sm">
                         <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </div>
                    <div class="col-sm">
                        <button id="new-quote" class="btn btn-primary" style={{backgroundColor: this.state.color}} onClick={this.clickNewQuote}>New Quote</button>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

function getRandomQuote(quotes){
    const numOfQuotes = quotes.length;
    const quoteIndex = Math.floor(Math.random() * numOfQuotes);
    const quote = quotes[quoteIndex];
    return {
        text: quote.text,
        author: quote.author
    }
}

function getRandomColor(){
    const colors = ["burlywood", "black", "coral", "darkblue", "darkgreen", "darkmagenta", "darkorchird", "lightslategrey", "midnightblue", "turqoise", "teal", "yellowgreen", "tomato", "steelblue", "tan", "sienna", "seagreen", "sandybrown", "salmon", "saddlebrown"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

export default QuoteBox;