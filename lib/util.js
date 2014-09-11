/**
 * Utilities for node-weather
 *
 */
 
exports.showBasic = function(data) {
    return console.log('~>'.green + ' 今天是' + (data.date).bold + ' - ' + (data.results[0].currentCity).bold);
};

exports.showPM25 = function(data) {
    return console.log('  - PM2.5: ' + (data.results[0].pm25).yellow);
};

exports.showThreeDaysWeather = function(data) {
    var weather = data.results[0].weather_data;
    var i, prefix;

    for(i = 0; i < 3; i++) {
        prefix = '  - ';

        switch(i) {
            case 0:
                prefix += '今: '.bold;
                break;
            case 1:
                prefix += '明: '.bold;
                break;
            case 2:
                prefix += '后: '.bold;
                break
        }
        console.log(prefix + weather[i].temperature + ' ' + weather[i].weather + weather[i].wind);
    }
};
