//2. get all the countries with a population of less than 2 lakhs  using filter function
 var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://restcountries.com/v3.1/all", true);

      xhr.send();
      xhr.onload = function getCountriesWithLowPopulation() {
        const apiUrl = "https://restcountries.com/v3.1/all";
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const countriesWithLowPopulation = data.filter(
              (country) => country.population < 200000
            );
            console.log("Countries with Population Less than 2 lakhs:");
            countriesWithLowPopulation.forEach((people) => {
              console.log(people.name.common);
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };

//OUTPUT
Countries with Population Less than 2 lakhs:
 Nauru
 United States Virgin Islands
 Niue
 Palau
 British Virgin Islands
 Dominica
 Antigua and Barbuda
 Northern Mariana Islands
 Saint Vincent and the Grenadines
 Saint Lucia
