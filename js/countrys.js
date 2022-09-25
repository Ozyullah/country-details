const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries= counts =>{
    // const container =document.getElementById('count-container')
    // for(const count of counts){
    //     console.log(count);
    //     const creatDiv =document.createElement('div')
    //     creatDiv.innerHTML = `
    //     <h2>
    //     `
    // }
    counts.forEach(count => {
        const container =document.getElementById('count-container');
        const makeDiv =document.createElement('div')
        makeDiv.classList.add('user');
        makeDiv.innerHTML=`
        <h3> name: ${count.name.common}</h3>
        <h4> capitale: ${count.capital ? count.capital[0] : 'No Capital'} </h4>
        <button id="btn-flag" onclick="loadCountriesDetails('${count.cca2}')">Details</button>
        `
        // array ar vitora man thakay 22
        container.appendChild(makeDiv)
    });

}

const loadCountriesDetails = (code) =>{
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(info => displayCountriesDitails(info[0]))
}

const displayCountriesDitails = ditailes => {
    console.log(ditailes);
    const countryDetail= document.getElementById('country-detail');
    countryDetail.innerHTML=`
    <h4>Country Name: ${ditailes.name.common} </h4>
    <div></div>
    <img src="${ditailes.flags.png}">
    <div>
    <h3>Official Name: ${ditailes.name.official}<h3>
    <h3>Capital: ${ditailes.capital}</h3>
    <h3>Region: ${ditailes.region}<h3>
    <h3> Populations: ${ditailes.population} , Area: ${ditailes.area}</h3>
    <h3>Car Drive side: ${ditailes.car.side}<h3>
    </div>
    <img id="iconSolu" src="${ditailes.coatOfArms.png}">
    `
}
loadCountries();