const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.getElementById(`loader`)

let apiQuotes = [];

//Show Loading 
function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading 
function complete() {
  quoteContainer.hidden = false ;
  loader.hidden = true; 
}
//Show new quote
function newQuote() {
    loading();
    //pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Check author is available or not
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    //Check quote length to fix styling
    if (quote.text.length > 50) {
        quoteText.classList.add(`long-quote`);
    } else {
        quoteText.classList.remove(`long-quote`);
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}
//Get quotes from API
async function getQuotes() {
    loading();
    const apiURL = `https://jacintodesign.github.io/quotes-api/data/quotes.json`;
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // handle error
    }
}

//To tweet a quote 
function tweetQuote () {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, `_blank`);
}

//Event listeners 
newQuoteBtn.addEventListener(`click`, newQuote);
twitterBtn.addEventListener(`click`, tweetQuote)

//On Load
getQuotes();
