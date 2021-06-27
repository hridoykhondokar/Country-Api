

fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

 const displayCountries = countries =>{
   
    const mainDiv = document.getElementById('all-counter');


    countries.forEach(country => {
       const countriesDiv = document.createElement('div')
       countriesDiv.className = 'country';
       const cInfo = `
           <h1 class="name">${country.name}</h1>
           <p class="capital">${country.capital}</p>
          <h4 class="population">${country.population}</h4>
           <button onclick="displayDetails('${country.name}')">Details</button>
       `;
       countriesDiv.innerHTML = cInfo;
       mainDiv.appendChild(countriesDiv)
    });

 }

  const displayDetails = name =>{
     const url = `https://restcountries.eu/rest/v2/name/${name}`
     fetch(url)
     .then(res => res.json())
     .then(data => renderCountry(data[0]));
    
  }

  const renderCountry = country =>{
   const details = document.getElementById('countryDetails');
   details.innerHTML =  `
       <h3>${country.name}</h3>
       <p>${country.population}</p>
       <img src='${country.flag}'>
   `
  }

    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
          
    //     const countryInfo = `
    //           <h3>${country.name}</h3>
    //           <p>${country.capital}</p>
    //           <h6>${country.population}</h6>
    //     `;
         
    //     // const countryH3 = document.createElement('h3');
    //     // countryH3.innerText = country.name;
    //     // const countryP = document.createElement('p');
    //     // countryP.innerText = country.capital;
    //     // const countryH6 = document.createElement('h6');
    //     // countryH6.innerText = country.population;
    //     // countryDiv.appendChild(countryH3);
    //     // countryDiv.appendChild(countryP);
    //     // countryDiv.appendChild(countryH6);
    //     countryDiv.innerHTML = countryInfo;
    //     mainDiv.appendChild(countryDiv)

        
    // }

