import React from 'react'
import './City.css'

const City = (props) => {
    return (
        <form className="city">
            <label className="city_label">Location</label>
            <input className="city_input"
                type="text"
                placeholder="city"
                value={props.city}
                onChange={props.change}
            />
        </form>
    );
}

export default City;