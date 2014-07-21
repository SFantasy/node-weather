var fs      = require('fs'),
    picture = require('picture-tube'),
    request = require('request'),
    colors  = require('colors');

// Read the configuration file of your own
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

module.exports = function(city) {
    var requestUrl = '';

    requestUrl = config.base + '&ak=' + config.key + '&location=' + city;

    // Request for the weather API
    request(requestUrl, function(err, res, body) {
        var data, result, weather;

        if(!err && res.statusCode == 200) {
            data = JSON.parse(body);
            result = data.results[0];
            weather = result.weather_data;

            console.log('~>'.green + ' 今天是' + (data.date).bold + ' - ' + (result.currentCity).bold);
            console.log('  - ' + 'PM2.5:'.bold + (result.pm25).yellow);
            console.log('  - ' + '今:'.bold + weather[0].temperature + weather[0].weather + weather[0].wind);
            console.log('  - ' + '明:'.bold + weather[1].temperature + weather[1].weather + weather[1].wind);
            console.log('  - ' + '后:'.bold + weather[2].temperature + weather[2].weather + weather[2].wind);
        }
    });
}
