function restaurantReducer(state=[],action){

  switch(action.type){
    
    case 'ADD_RESTAURANT':
      return [...state, action.restaurant]
    default: return state;

  }
}

export default restaurantReducer
