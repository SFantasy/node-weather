var request = require('request'),
    colors  = require('colors');

var config = require('./config').config,
    util = require('./util');

module.exports = function(city) {
    var requestUrl = config.base + '&ak=' + config.key + '&location=' + city;

    // Request for the weather API
    request({
        pool: false,
        agent: false,
        url: requestUrl,
        method: 'GET',
        json: true
    }, function(err, res, body) {
        if(!err && res.statusCode == 200) {
            if (body.error !== 0) {
              console.log('Request error'.red);
              return;
            }

            util.showBasic(body);
            util.showPM25(body);
            util.showThreeDaysWeather(body);
        }
    });
};
