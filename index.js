const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

//action creator - a function that returns the object. 
function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

function restocked(qty){
    return{
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

 
const initialState = {
    numOfCakes: 10,
}

// reducer = pure function taking previous state and action as param
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial State ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State ', store.getState()));

//we throw in the action creator method in dispatch function so that if in future action is changed, we can simply change the action creator instead of going in all the files. 
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restocked(3))
unsubscribe();