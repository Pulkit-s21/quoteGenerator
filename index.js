const quotes = [
    {
        name: "Stephen King",
        quote: "Get busy living or get busy dying."
    },
    {
        name: "John F. Kennedy",
        quote: "Those who dare to dail misreably can achieve greatly."
    },
    {
        name: "Abraham Lincoln",
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name: "Leonardo Da Vinci",
        quote: "As a well-spent day brings happy sleep, so a life well spent brings happy death."
    },
    {
        name: "leo Tolstoy",
        quote: "If you want to be happy, be."
    },
]

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click", showQuote);

window.addEventListener("DOMContentLoaded", showQuote);

function showQuote() {
    let randomNum =  getRandomNumber();
    quoteAuthor.innerHTML = quotes[randomNum].name;
    quote.innerHTML = quotes[randomNum].quote;
}

function getRandomNumber() {
    return Math.floor(Math.random() * quotes.length);
}