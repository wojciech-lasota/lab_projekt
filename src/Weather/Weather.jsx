import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Weather() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '159ef6e4ca5a55b5e2fbe80b0e778d48',
        lat: '51.2465',
        lon: '22.5684',
        lang: 'pl',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Lublin"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    );
}

export default Weather;
