import React from 'react';
import { useRxAjax, useMountEffect } from '@reonomy/reactive-hooks';
import * as api from '../data/weather';

export default function WeatherWidget() {
    const [weather, getWeather] = useRxAjax(api.weather);
    useMountEffect(() => getWeather({}));
    return (
      <article>
        <h1>Weather <button onClick={() => getWeather({})}>Refresh</button></h1>
        <section>
        {weather && weather.status === 'pending'   && 
            <p>Pending...</p>}

        {weather && weather.status === 'failed'    && 
            <p>Failed {JSON.stringify(weather.error)} </p>}

        {weather && weather.status === 'succeeded' && (
            <p>Succeeded {JSON.stringify(weather.res)}</p>
        )}
        </section>
     </article>
    );
}