// Require https module
const http = require('http');

function getWeather(location) {
  const request = http.get(`http://api.wunderground.com/api/<key>/conditions/q/${location}.json`, response =>{
    let body = "";
    response.on('data', data => {
      body += data.toString();
    });
    response.on('end', () => {
      body = JSON.parse(body);
      const currentTemp = body.current_observation.temp_f;
      locationString = location.split('/').reverse().join(', ');
      console.log(`The current temperature in ${locationString} is ${currentTemp}°F.`);
    });
  });
}

module.exports.get = getWeather;