import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuoteBox from './QuoteBox';

const text = ReactDOM.createRoot(document.getElementById("quote-box"));
text.render(
    <QuoteBox />
);