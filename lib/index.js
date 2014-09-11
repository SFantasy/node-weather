var request = require('request'),
    colors  = require('colors');

var config = require('./config').config,
    util = require('./util');

module.exports = function(city) {
    var requestUrl = config.base + '&ak=' + config.key + '&location=' + city;

    // Request for the weather API
    request(requestUrl, function(err, res, body) {
        var data;

        if(!err && res.statusCode == 200) {
            data = JSON.parse(body);
            if (data.error !== 0) {
              console.log('Request error'.red);
              return;
            }

            util.showBasic(data);
            util.showPM25(data);
            util.showThreeDaysWeather(data);
        }
    });
}
