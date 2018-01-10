import React from 'react'

const Restaurant = (props) => {
  console.log(props)
    return (
      <div>
        <p>{props.resto.restaurant}</p>
      </div>
    )
}

export default Restaurant;
