var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c47e98d8ad4248de04f44948396b9998&units=metric';

//c47e98d8ad4248de04f44948396b9998
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c47e98d8ad4248de04f44948396b9998&units=metric
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); //this will encode everything properly, get rid of spaces
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //backticks allow us to insert variables into the string

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message){//something went wrong
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
    });
  }
}
