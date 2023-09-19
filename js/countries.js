const loadCountries= () =>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayCountries(data))

}

const displayCountries = countries =>{
    // console.log(countries);

    // for(const country of countries){
    //     // console.log(country)
    // }
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h2>${country.name.common}</h2>
            <h4>Capital: ${country.capital ? country.capital[0]: 'No Capital'}</h4>
            <button onclick="detailsCountries('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(div)
    })
}

const detailsCountries = code =>{
    // https://restcountries.com/v3.1/alpha/{code} 
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showCountries(data[0]))
}

const showCountries = country =>{
    console.log(country)
    const container = document.getElementById('country-details');
    // get individual data 
    const currencies = country.currencies;
    const currencyCodes = Object.keys(currencies);
    const div = document.createElement('div');
    div.innerHTML = `
        <h4>Currencies: ${currencyCodes}</h4>
        <img src=${country.flags.png}>
    `
    container.appendChild(div);
    // console.log(currencyCodes)
}

loadCountries()