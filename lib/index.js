var fs      = require('fs'),
    picture = require('picture-tube'),
    request = require('request'),
    colors  = require('colors');

var config = require('./config').config,
    util = require('./util');

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
