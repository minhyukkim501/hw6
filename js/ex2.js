const countryList = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla",
    "Antarctica", "Antigua-and-Barbuda", "Argentina", "Armenia", "Aruba",
    "Australia", "Autria", "Azerbaïjan"
];

const countryInput = document.getElementById("country");
const suggestionsDiv = document.getElementById("suggestions");

function showSuggestions(inputValue) {
    suggestionsDiv.innerHTML = ""; 
    
    if (inputValue.length === 0) {
        return; 
    }
    
    const filtered = countryList.filter(country =>
        country.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    
    filtered.forEach(country => {
        const div = document.createElement("div");
        div.className = "suggestion";
        div.textContent = country;
        
        div.addEventListener("click", () => {
            countryInput.value = country;
            suggestionsDiv.innerHTML = "";
        });
        
        suggestionsDiv.appendChild(div);
    });
}

countryInput.addEventListener("input", event => {
    showSuggestions(event.target.value);
});