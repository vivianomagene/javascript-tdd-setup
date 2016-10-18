

function displayweather() {
         httpClientGet(
        'http://api.openweathermap.org/data/2.5/weather?q='+ Text1.value +'&mode='+ Text2.value +'&appid=1b50b16d8d4bf45d9525730d1c9196e4', displayweatherDone);}

        function httpClientGet(theUrl, callback) 
		{
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    callback(xmlHttp.responseText);
                if (xmlHttp.readyState == 4 && xmlHttp.status != 200)
                    callback("Error");
            }
            xmlHttp.open("GET", theUrl, true); // true for asynchronous
            xmlHttp.send(null);
        }

        function displayweatherDone(val) {
            span1.innerHTML = val;
        }
	
	
	
	
	