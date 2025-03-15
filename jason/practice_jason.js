async function generate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();
    console.log(superHeroes);

    generateHeader(superHeroes);
    generateMain(superHeroes);
}

function generateHeader(obj) {
    const header = document.querySelector('header');
    
    const squadName = document.createElement('h1');
    squadName.textContent = obj.squadName;

    header.appendChild(squadName);

    const quickInfo = document.createElement('p');
    quickInfo.textContent = `Home: ${obj.homeTown} Formed: ${obj.formed}`;

    header.appendChild(quickInfo);
}

function generateMain(obj) {
    const main = document.querySelector('main');

    const heroes = obj.members;

    for (hero of heroes) {
        const hArticle = document.createElement('article');
        const hHeroName = document.createElement('h2');
        const hSecretIdentity = document.createElement('p');
        const hAge = document.createElement('p');
        const hSuperpowers = document.createElement('p');
        const hSuperpowersList = document.createElement('ul');
        
        hHeroName.textContent = hero.name;
        hSecretIdentity.textContent = `Secret Identity: ${hero.secretIdentity}`;
        hAge.textContent = `Age: ${hero.age}`;
        hSuperpowers.textContent = "Superpowers:";
        
        const powers = hero.powers;

        for (power of powers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            hSuperpowersList.appendChild(listItem);
        }

        hArticle.appendChild(hHeroName);
        hArticle.appendChild(hSecretIdentity);
        hArticle.appendChild(hAge);
        hArticle.appendChild(hSuperpowers);
        hArticle.appendChild(hSuperpowersList);

        main.appendChild(hArticle); 
    }
}

generate();