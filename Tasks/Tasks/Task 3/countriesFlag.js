  
  const req = new XMLHttpRequest();
  req.open("GET","https://restcountries.com/v3.1/all");
  req.send();
  req.onload = fucntion () {
    console.log(JSON.parse(this.response));
   }