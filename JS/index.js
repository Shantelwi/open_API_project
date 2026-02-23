// footer info
let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = `Shantel Williams ${thisYear} ©️ `;

footer.appendChild(copyright);

//Create Fetch 
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('comics-container');

    const characters = ["Spider-Man", "Avengers", "Wolverine", "Black Panther", "DeadPool"];

    characters.forEach(character => {
        //create header and list for each character
        const charHeader = document.createElement("h3");
        charHeader.textContent = character;
        const charList = document.createElement("ul");

         container.appendChild(charHeader);
         container.appendChild(charList);

         //fetch top 5 comics for these characters
         fetch(`https://api.allorigins.win/raw?url=https://marvel.emreparker.com/v1/search/issues?q=${encodeURIComponent(character)}&limit=5`)
            .then(response =>{
                if (!response.ok) throw new Error("Request Failed");
                return response.text();
            })
            .then(text => {
                const data = JSON.parse(text);
                console.log(data);
                const comics = data.data?.results || [];

                comics.forEach(issue =>{
                    const li = document.createElement('li');
                    li.textContent = issue.title;
                    charList.appendChild(li);
                });
            })
            .catch(error => console.error(`Error fetching ${character}:`, error));
    });

});
// const comicSection = document.getElementById('comicSection');
// const comicList = comicSection.querySelector('ul');
// // console.log(comicSection);

// fetch('https://marvel.emreparker.com/v1/search/issues?q=spider-man&limit=5')
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
//         const comics = data.results || [];
//         comicList.innerHTML = '';

//         comics.forEach(issue => {
//             const listItem = document.createElement('li');
//             listItem.textContent = issue.title;
//             comicList.appendChild(listItem);
//         })
//     })
//     .catch(error => {
//         console.error('An error occurred:', error); //Handling Errors
//     });