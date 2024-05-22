//3. print the following details name, capital, flag using forEach function
const xhr = new XMLHttpRequest();

      xhr.open("GET", "https://restcountries.com/v3.1/all", true);

      xhr.send();
      xhr.onload = function printCountryDetails() {
        const apiUrl = "https://restcountries.com/v3.1/all";

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            data.forEach((country) => {
              const name = country.name.common;
              const capital = country.capital;
              const flag = country.flags.png || "N/A";

              console.log(`Name: ${name}`);
              console.log(`Capital: ${capital}`);
              console.log(`Flag: ${flag}`);
              console.log("--------------------");
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };

//OUTPUT
Name: Moldova
Capital: Chișinău
Flag: https://flagcdn.com/w320/md.png
 --------------------
Name: United States
Capital: Washington, D.C.
Flag: https://flagcdn.com/w320/us.png
--------------------
Name: Mayotte
Capital: Mamoudzou
Flag: https://flagcdn.com/w320/yt.png

