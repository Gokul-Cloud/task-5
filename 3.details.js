var request = new XMLHttpRequest();
request.open('Get','https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload=function()
{
    var data = JSON.parse(this.response);
    const population = data.forEach((items) => {
        console.log(items.name);
        console.log(items.capital);
        console.log(items.flag);} );
    console.log(population);
}