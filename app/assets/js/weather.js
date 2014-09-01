function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

function weather(city, country) {

	getJSONP('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&callback=?', function(data){
	    //console.log(data);
	    var div = document.getElementById('weather');
	    var city = document.getElementById('w_title');
	    var temperature = document.getElementById('w_temperature');
	    var desc = document.getElementById('w_description');

	    city.innerHTML = data.name;
	    temperature.innerHTML = data.main.temp;
	    desc.innerHTML = data.weather[0].description;
	});

}