const fetchWeatherData = async() => {
    fetch('https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02', {
        method:'GET',
        mode:'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        console.log('response',response);
        return response.json();
    })
    .then(data => {
        console.log('data',data);
    })
    .catch((err) => {
        console.log(err)
    })
}

fetchWeatherData();
