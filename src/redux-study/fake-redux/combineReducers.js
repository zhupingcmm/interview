exports = module.exports = combineReducers;

function combineReducers(reducers){
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};

    for(let i =0; i< reducerKeys.length; i++){
        const key = reducerKeys[i];
        finalReducers[key] = reducers[key]
    }


    const finalReducerKeys = Object.keys(finalReducers);

    return function combination(state={}, action){
        let hasChanged = false;
        const nextState = {};

        for(let i = 0; i< finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                const errorMessage = getUndefinedStateErrorMessage(key, action)
                throw new Error(errorMessage)
            }
            nextState[key] = nextStateForKey
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        hasChanged =
            hasChanged || finalReducerKeys.length !== Object.keys(state).length
        return hasChanged ? nextState : state
    } 

}