// Require https module
const http = require('http');

function getWeather(location) {
  const request = http.get(`http://api.wunderground.com/api/<key>/conditions/q/CA/${location}.json`, response =>{
    let body = "";
    response.on('data', data => {
      body += data.toString();
    });
    response.on('end', () => {
      body = JSON.parse(body);
      const currentTemp = body.current_observation.temp_f;
      console.log(`The current temperature in ${location} is ${currentTemp}°F.`);
    });
  });
}

const location = process.argv.slice(2);
getWeather(location);