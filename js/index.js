var arrayOfQuotes = [
    {'author': ' Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Marilyn Monroe', 
     'quote': "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
];

function generateQuote(){
    var num = Math.floor(Math.random() * arrayOfQuotes.length);
    document.getElementById('quoteOutput').innerHTML = `\"${arrayOfQuotes[num].quote}\"`;
    document.getElementById('authorOutput').innerHTML = `--${arrayOfQuotes[num].author}`;
}
