

var quotes=['"Be yourself; everyone else is already taken."', '"Two things are infinite: the universe and human stupidity; and i am not sure about the universe."','"If you tell the truth, you dont have to remember anything."','"Live as if you were to die tomorrow. Learn as if you were to live forever."','"Insanity is doing the same thing, over and over again, but expecting different results."'];

var authors=['--Oscar Wilde','--Albert Einstein','--Mark Twain','--Mahatma Gandhi','--Anonymous'];
var usedIndexes = [];
function generateQuote() {
    var temp;
    if (usedIndexes.length === quotes.length) {
       usedIndexes.splice(0,quotes.length - 1 );
       console.log(usedIndexes);
     
    }
  
    var randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * quotes.length);
      
    } while (usedIndexes.includes(randomNumber)); 
    usedIndexes.push(randomNumber); 
    document.getElementById("quote").innerHTML = quotes[randomNumber];
    document.getElementById("author").innerHTML = authors[randomNumber];
  }

