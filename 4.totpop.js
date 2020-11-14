var request = new XMLHttpRequest();
request.open('Get','https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload=function()
{
    var data = JSON.parse(this.response);
    const population = data.reduce((totalpopulation, b) => totalpopulation + Number(b.population), 0);
    console.log(population);
}