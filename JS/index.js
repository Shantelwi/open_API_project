// footer info
let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = `Shantel Williams ${thisYear} ©️ `;

footer.appendChild(copyright);


const charList = document.querySelector('#characters ul');

fetch('https://swapi.dev/api/people/')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        for (let i = 0; i < data.results.length; i++) {

            let character = data.results[i];

            let li = document.createElement('li');
            li.className = "card";

            let header = document.createElement('div');
            header.className = "card-header";
            header.textContent = character.name;

            let details = document.createElement('div');
            details.className = "card-details";
            details.style.display = "none";

            header.addEventListener('click', async function () {

                // close all cards first
                let allCards = document.querySelectorAll('.card-details');
                for (let j = 0; j < allCards.length; j++) {
                    allCards[j].style.display = "none";
                }

                // open this one
                details.style.display = "block";

                // fetch homeworld
                let homeworldName = "Unknown";

                try {
                    let homeRes = await fetch(character.homeworld);
                    let homeData = await homeRes.json();
                    homeworldName = homeData.name;
                } catch (error) {
                    console.log("Could not get homeworld");
                }

                // fetch films
                let filmNames = [];

                try {
                    for (let k = 0; k < character.films.length; k++) {
                        let filmRes = await fetch(character.films[k]);
                        let filmData = await filmRes.json();
                        filmNames.push(filmData.title);
                    }
                } catch (error) {
                    console.log("Could not get films");
                }

                details.innerHTML = `
                    <p>Gender: ${character.gender}</p>
                    <p>Birth Year: ${character.birth_year}</p>
                    <p>Homeworld: ${homeworldName}</p>
                    <p>Films: ${filmNames.join(', ')}</p>
                `;
            });

            li.appendChild(header);
            li.appendChild(details);
            charList.appendChild(li);
        }

    })
    .catch(function (error) {
        console.log("Something went wrong");
    });


//Fetch for Starships

fetch('https://www.swapi.tech/api/starships?page=2&limit=10')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        //Do something with the data
        console.log(data);

        //Display Starships in List
        const shipSection = document.getElementById('starships');

        const shipList = shipSection.querySelector('ul');

        for (let i = 0; i < data.results.length; i++) {
            const ship = document.createElement('li');

            ship.textContent = data.results[i].name;

            shipList.appendChild(ship);
        }
    })
    .catch(error => {
        console.error('An error occurred:', error); //Handling Errors
    });


//Fetch for movies
fetch('https://www.swapi.tech/api/films')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        //Do something with the data
        console.log(data);

        //Display films in List
        const filmList = document.querySelector('#movies ul');

        for (let i = 0; i < data.result.length; i++) {
            const film = document.createElement('li');

            film.textContent = data.result[i].properties.title;

            filmList.appendChild(film);
        }
    })
    .catch(error => {
        console.error('An error occurred:', error); //Handling Errors
    });

