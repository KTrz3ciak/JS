// Using https://rickandmortyapi.com/api fetch all characters from episode 7.
// documentation can be found here: https://rickandmortyapi.com/documentation/#rest

// RUN npm install IN THIS FOLDER BEFORE RUNNING YOUR CODE!
const fetch = require('node-fetch');
const URL = 'https://rickandmortyapi.com/api';
const episode = 7;
function getCharactersFromEpisode(episodeNmber) {
  // your code here
  fetch(`${URL}${episode}`)
    .then((episode) => {
      if (episode.ok === false) {
        throw new Error('Network error: ' + episode.includes("07"));
        } else {
            return episode.json()
        }
    })
}

getCharactersFromEpisode(7).then((characters) =>
  characters.forEach((character) => console.log(character.name))
);