/*
const loadedQuotes= () =>{
    fetch(`https://api.kanye.rest/`)
    .then(res => res.json())
    .then(data => displayQuote(data))
    .catch(error =>{
        console.log(error)
    })
}
*/

const loadedQuotes2 = async() =>{
    try {
        const res = await fetch(`https://api.kanye.rest/`);
        const data = await res.json();
        displayQuote(data)
    }
    catch(error){
        console.log(error)
    }
}

const displayQuote= quote =>{
    console.log(quote)
    const blockQuotes = document.getElementById('quote');
    blockQuotes.innerHTML = quote.quote;
    
}

loadedQuotes2()