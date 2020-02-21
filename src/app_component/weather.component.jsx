import React from "react";

const Weather = (props ) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>
                    {props.city},
                    {props.country}
                </h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <h1 className="py-2">{props.temp_celsius}°</h1>

                {/*show max and min temp*/}

                {minMaxTemp(props.temp_min, props.temp_max)}

                <h4 className="py-3">{props.description} </h4>
            </div>
        </div>
    );
};

function minMaxTemp(min, max) {
    return(
        <h3>
            <span className="px-4">{min}°</span>
            <span className="px-4">{max}°</span>
        </h3>
    )
}

export default Weather;