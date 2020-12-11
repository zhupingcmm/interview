const {createStore, combineReducers} = require('./fake-redux');


const loggerMiddleWare = ({dispatch, getState}) =>(next) =>(action) =>{
    // console.log("loggerMiddleWare====",getState())
    return next(action);
}

const middleWareList = [loggerMiddleWare];

const defaultState ={number: 0};
const rootReducer = (state = defaultState, action) => {
    console.log("action::", action, state);
    const {number} = state;
    switch(action.type){
        case 'Add':
        return {
            ...state,
            number: number + 1 
        }
    }

    return state;
}

const sharedReducer = (state={age:1}, action) =>{
    const { age } = state; 
    switch(action.type){
        case 'Add':
            return {
                ...state,
                age: age + 1
            }
    }

    return state;
}

const reducers = combineReducers({rootReducer,sharedReducer})


// const store = createStore(reducers, applyMiddleware(...middleWareList));
const store = createStore(reducers);
// console.log("store::", store)
const unSubscribe = store.subscribe(()=>{console.log("abc")});

store.dispatch({type:'Add'});


console.log('state::', store.getState());
// store.getState();