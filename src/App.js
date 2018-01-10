import React, { Component } from 'react';
import logo from './logo.svg';
import RestaurantForm from './containers/RestaurantForm'
import RestaurantList from './containers/RestaurantList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <RestaurantForm/>
        <RestaurantList/>
      </div>
    );
  }
}

export default App;
