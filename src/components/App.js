import React, { Component } from 'react';
import './App.css';
import City from './City'
import Forecast from "./Forecast"
import Footer from './Footer'


class App extends Component {

  state = {
    value: "",
    city: "",
    country: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    icon: "",
    description: "",
    error: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.value !== this.state.value) {

      const APIKey = "371121ac1638d26e2684de5d76257c95"
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=${APIKey}`

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw Error("nie udało się")
        })
        .then(data => {
          this.setState(prevState => ({
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            icon: data.weather[0].icon,
            description: data.weather[0].main,
            error: false,
          }))
        })
        .catch(err => {
          if (this.state.value) {
            this.setState(prevState => ({
              error: true,
              city: this.state.value
            }))
          } else if (this.state.value === "") {
            this.setState(prevState => ({
              city: "",
              country: "",
              temp: "",
              temp_min: "",
              temp_max: "",
              icon: "",
              description: "",
              error: false,
            }))
          }
        })
    }
  }

  render() {
    return (
      <div className="conteiner">
        <City city={this.state.value} change={this.handleInputChange} />
        <Forecast weather={this.state} />
        <Footer />
      </div >
    );
  }
}
export default App;
