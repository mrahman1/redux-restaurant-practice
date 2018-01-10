import React from 'react'
import addRestaurant from '../actions/restaurants'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class RestaurantForm extends React.Component{
  state = {
    restaurant: ''
  }

  handleChange = (event) => {
    this.setState({
      restaurant: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <h1> Restaurant Form </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type = "text"
            placeholder = "enter restaurant"
            onChange={this.handleChange}
            value={this.state.restaurant}
          />
          <input type = "submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRestaurant: addRestaurant
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantForm);
