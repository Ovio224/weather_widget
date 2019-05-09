import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import './App.css';
import Widget from './Components/Widget';

export default class App extends Component {
  state = {
    city: '',
    temperature: '',
    humidity: '',
    wind: '',
    windDir: '',
    loading: true,
  };

  getWeather = (query = 'Copenhagen') => {
    this.setState({ loading: true });
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${query},dk&appid=${apiKey}&units=metric`)
      .then(response => {
        this.setState({
          city: query,
          temperature: Math.floor(response.data.main.temp),
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          windDir: response.data.wind.deg,
          loading: false,
        }); // end setState
      }) // end then
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/search" />} />
          <Route
            path="/search"
            render={({ history }) => (
              <Widget
                getWeather={this.getWeather}
                city={this.state.city}
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                wind={this.state.humidity}
                windDir={this.state.windDir}
                loadingState={this.state.loading}
                history={history}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
