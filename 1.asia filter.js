var request = new XMLHttpRequest();
request.open('Get','https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload=function()
{
    var data = JSON.parse(this.response);
    const asia = data.filter(items => (items.region == 'Asia'));
    console.log(asia);
}