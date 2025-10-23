const houses = [
    { code: "ST", name: "Stark" },
    { code: "LA", name: "Lannister" },
    { code: "BA", name: "Baratheon" },
    { code: "TA", name: "Targaryen" }
];

const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; 
    }
};

function populateHouses() {
    const houseSelect = document.getElementById("house");
    houses.forEach(house => {
        const option = document.createElement("option");
        option.value = house.code;
        option.textContent = house.name;
        houseSelect.appendChild(option);
    });
}

function displayCharacters(houseCode) {
    const charactersList = document.getElementById("characters");
    charactersList.innerHTML = ""; 
    const characters = getCharacters(houseCode);
    characters.forEach(character => {
        const li = document.createElement("li");
        li.textContent = character;
        charactersList.appendChild(li);
    });
}

document.getElementById("house").addEventListener("change", event => {
    displayCharacters(event.target.value);
});

window.addEventListener("DOMContentLoaded", populateHouses)