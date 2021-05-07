const endpoints="https://raw.githubusercontent.com/hunksammy/2084377289testbysam/main/myapp.api";



fetch(endpoints)
 .then(blob => blob.json())
 .then(data => {
<<<<<<< HEAD
 ul.innerHTML=data.map(place => `<li class="character">
                <h2>${place.date}</div></h2><br> `).join("");
=======
 ul.innerHTML=data.map(place => `<h1><div class="card">${place.date}</div></h1><br> `).join("");
>>>>>>> 6dcae78f90b8db044dc45e9759d625eca6df4b7a
})



const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

<<<<<<< HEAD
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
=======
})
>>>>>>> 6dcae78f90b8db044dc45e9759d625eca6df4b7a
