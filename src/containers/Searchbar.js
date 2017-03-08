import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index.js';

class SearchBar extends React.Component {

  constructor(){
    super();
    this.state = {
      term: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
    });
  }

  handleInputChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  render () {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
        placeholder="Get a five-day forecast in your favourite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">submit</button>
        </span>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchWeather }, dispatch)
);

export default connect(null, mapDispatchToProps)(SearchBar);
