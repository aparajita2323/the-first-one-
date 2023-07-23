// getting the api 
const quoteContainer= document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const authorText= document.getElementById('author');
const twitterBtn= document.getElementById('twitter');
const newQuoteBtn= document.getElementById('new-quote');
let jsonquote=[];
//show new quote
function newquote(){
    //pick a random quote from the array
    const quote2= jsonquote[Math.floor(Math.random()*jsonquote.length)] ;
    // check if author empty
    if(quote2.author=='null'){
        authorText.textContent='unknown' ;
    }
    else {
        authorText.textContent=quote2.author ;
    }
    if(quote2.text.length>120){
        quoteText.classList.add('long-quote') ;

    }
    else {
        quoteText.classList.remove('long-quote') ; 
    }
    quoteText.textContent=quote2.text;


}

async function GetQuotes(){
    const url='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const quote = await fetch(url);
        jsonquote= await quote.json();
        newquote();

    }
    catch(error){

    }
}
// tweet quote
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}` ;
    window.open(twitterUrl, '_blank'); 
}
//event listeners
newQuoteBtn.addEventListener('click',newquote);
twitterBtn.addEventListener('click',tweetQuote);
// driver code
GetQuotes();
