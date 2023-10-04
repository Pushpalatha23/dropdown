// Sample data for countries and cities
const data = {
    "USA": ["New York", "Los Angeles", "Chicago"],
    "Canada": ["Toronto", "Vancouver", "Montreal"],
    "UK": ["London", "Manchester", "Birmingham"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"],
    "India": ["AP", "TS", "Karnataka"]

};

// Get references to the select elements
const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");

// Populate the country dropdown
for (const country in data) {
    const option = document.createElement("option");
    option.value = country;
    option.text = country;
    countrySelect.appendChild(option);
}

// Event listener for country select change
countrySelect.addEventListener("change", function () {
    const selectedCountry = countrySelect.value;
    const cities = data[selectedCountry] || [];

    // Clear the city dropdown
    citySelect.innerHTML = '<option value="default">Select a city</option>';

    // Populate the city dropdown with the selected country's cities
    cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        citySelect.appendChild(option);
    });
});