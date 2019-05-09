import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    loading: true,
  };

  //   componentDidMount() {
  //     // hacky way of doing it, time was running out
  //     setInterval(() => {
  //       if (!this.query.value) {
  //         this.props.history.push({ pathname: '/search', search: `?city=${this.props.city}` });
  //       }
  //     }, 100);
  //   }

  // change the query string whenever the form is submitted
  handleSearch = e => {
    e.preventDefault();
    this.props.history.push({ pathname: '/search', search: `?city=${this.query.value}` });
    this.props.getWeather(this.query.value);
    e.currentTarget.reset();
    this.setState({
      loading: !this.props.loadingState,
    });
  };
  render() {
    let spinner = <img className="loading" src={require('../assets/loading.gif')} alt="Loading..." />; // loading gif
    let loading = this.props.loadingState;

    return (
      <form className="form-inline" onSubmit={this.handleSearch}>
        <div className="form-group">
          {loading ? (
            spinner
          ) : (
            <input
              type="search"
              className="form-control"
              id="city"
              placeholder="City"
              ref={input => (this.query = input)}
            />
          )}
        </div>
        <button type="submit" className="btn btn-default">
          Search
        </button>
      </form>
    );
  }
}
