const CAKE_ORDERED = 'CAKE_ORDERED'


//action creator - a function that returns the object. 
function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

 
const initialState = {
    numOfCakes: 10,
    anotherProperty: 0,
}

// reducer = pure function taking previous state and action as param
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

