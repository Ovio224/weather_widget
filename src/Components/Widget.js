import React from 'react';
import Search from './Search';

function Widget(props) {
  return (
    <div className="widget" style={{ margin: 10, width: 300 }}>
      <div className="panel panel-info">
        <div className="panel-heading">
          Weather in <b>{props.city}</b>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Temperature: <b>{props.temperature}°C</b>
          </li>
          <li className="list-group-item">
            Humidity: <b>{props.humidity}</b>
          </li>
          <li className="list-group-item">
            Wind:{' '}
            <b>
              {props.wind} m/s {props.windDir}
            </b>
          </li>
          <li className="list-group-item">
            <Search
              loadingState={props.loadingState}
              history={props.history}
              getWeather={props.getWeather}
              city={props.city}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Widget;
