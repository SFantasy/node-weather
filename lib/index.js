var fs      = require('fs'),
    picture = require('picture-tube'),
    request = require('request'),
    colors  = require('colors');

var util = require('./util');

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
            util.showBasic(data);
            util.showPM25(data);
            util.showThreeDaysWeather(data);
        }
    });
}
