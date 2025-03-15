async function generate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();
    console.log(superHeroes);

    generateHeader(superHeroes);
    // generateMain(superHeroes);
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

generate();