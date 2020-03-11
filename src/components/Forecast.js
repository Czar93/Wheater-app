import React from 'react';
import './Forecast.css'

const Forecast = (props) => {

    const { city, country, temp, temp_min, temp_max, icon, description, error } = props.weather

    const roundTemp = Math.floor(temp)
    const roundTempMin = Math.floor(temp_min)
    const roundTempMax = Math.floor(temp_max)

    let content = null;

    if (!error && city) {
        const dateFormat = require('dateformat')
        const now = new Date()
        const today = dateFormat(now, "dddd, mmmm dS")
        content = (
            <>
                <div className="wheater_iconHolder">
                    <img className="wheater_icon" src={require(`../icons/${icon}.png`)} alt="wheater icon" />
                </div>
                <div className="wheater_mainDetails">
                    <div className="wheater_country">{city}, {country}</div>
                    <div className="wheater_temp">{roundTemp}&#186;</div>
                    <div className="wheater_tempMin">{roundTempMin}&#186;</div>
                    <div className="wheater_tempMax">{roundTempMax}&#186;</div>
                    <div className="wheater_description">{description}</div>
                    <div className="wheater_date">{today}</div>
                </div>
            </>
        )
    }

    return (
        <div className="wheater">
            {error ? <div className="wheater_error"><span>Ooops!</span> Enter a correct city</div> : content}
        </div>
    );
}

export default Forecast;

