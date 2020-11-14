var request = new XMLHttpRequest();
request.open('Get','https://restcountries.eu/rest/v2/al', true);
request.send();
request.onload=function()
{
    try
    {
    var data = JSON.parse(this.response);
    const asia = data.filter(items => (items.region == 'Asia'));
    const pop = asia.reduce((asiatot, crrval) => asiatot + Number(crrval.population), 0);
    console.log(pop);
    }
    catch(error)
    {
        alert(error.message);
    }
}