  
  const req = new XMLHttpRequest();
  req.open("GET","https://restcountries.com/v3.1/all");
  req.send();
  req.onload = function () {
    const obj = JSON.parse(this.response);
    console.log(obj);
    asianCountries = obj.filter((element) => element.region == "Asia")
    console.log(asianCountries);
    countriesWithPopLessThan2L = obj.filter((element) => element.population < 200000)
    console.log(countriesWithPopLessThan2L);
    countiresUsingUSD = obj.filter((elem) => elem.currencies === "USD")
    console.log(countiresUsingUSD);

  }