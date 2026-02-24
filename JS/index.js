// footer info
let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = `Shantel Williams ${thisYear} ©️ `;

footer.appendChild(copyright);


// const charSection = document.getElementById('charSection');
// const charList = charSection.querySelector('ul');
// // console.log(comicSection);

// fetch('https://www.swapi.tech/api/people?page=2&limit=10')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Request failed');
//         }
//         return response.text(); 
//     })
//     .then(text => {
//         //Do something with the data
//         const data = JSON.parse(text);
//         console.log(data);

//         //Display comics in List
//         const characters = data.results || [];
//         // charList.innerHTML = '';

//         characters.forEach(issue => {
//             const listItem = document.createElement('li');
//             listItem.textContent = issue.title;
//             charList.appendChild(listItem);
//         })
//     })
//     .catch(error => {
//         console.error('An error occurred:', error); //Handling Errors
//     });


//Fetch for people
fetch('https://www.swapi.tech/api/people?page=2&limit=10')
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        //Do something with the data
        console.log(data);

        //Display Repositories in List
        const charSection = document.getElementById('characters');

        const charList = charSection.querySelector('ul');

        for (let i = 0; i < data.results.length; i++) {
            const char = document.createElement('li');

            char.textContent = data.results[i].name;

            charList.appendChild(char);
        }
    })
    .catch(error => {
        console.error('An error occurred:', error); //Handling Errors
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

        //Display Repositories in List
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

        //Display Repositories in List
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