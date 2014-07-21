var fs = require('fs'),
    picture = require('picture-tube'),
    request = require('request');

var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

module.exports = function(city) {
    var requestUrl = '';

    requestUrl = config.base + '&ak=' + config.key + '&location=' + city;

    // Request for the weather API
    request(requestUrl, function(err, res, body) {
        if(!err && res.statusCode == 200) {
            
        }
    });
}
