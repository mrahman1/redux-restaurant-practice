import React from 'react'
import Restaurant from '../components/Restaurant.js'
import {connect} from 'react-redux'

class RestaurantList extends React.Component{
  render(){
    console.log(this.props.restaurants)

    const restaurants = this.props.restaurants.map( (resto, i) => {
      return (
        <Restaurant key={i} resto={resto} />
      )
    })
    return(
      <div>
        <h1>{restaurants}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { restaurants: state }
}

export default connect(mapStateToProps)(RestaurantList);
