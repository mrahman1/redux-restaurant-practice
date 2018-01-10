import React from 'react'

class RestaurantForm extends React.Component{

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("EVENT!")
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
            value={this.state.text}
          />
          <input type = "submit"/>
        </form>
      </div>
    )
  }
}

export default RestaurantForm;
