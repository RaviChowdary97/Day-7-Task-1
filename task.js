//1. get all countries from Asia continent/region using filter function

 const xhr = new XMLHttpRequest();

      xhr.open("GET", "https://restcountries.com/v3.1/all");

      xhr.send();
      xhr.onload = function getCountriesFromAsia() {
        const apiUrl = "https://restcountries.com/v3.1/all";

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const asiaCountries = data.filter(
              (country) => country.region === "Asia"
            );

            console.log("Countries in Asia:");
            asiaCountries.forEach((country) => {
              console.log(country.name.common);
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };

//OUTPUT
Countries in Asia:
 Yemen
 Malaysia
 Sri Lanka
 Kuwait
 Syria
 Jordan
 Nepal
Kazakhstan
 Turkmenistan
 Brunei
 Bhutan
 Azerbaijan
United Arab Emirates
 Uzbekistan
 Hong Kong
