
exports = module.exports = createStore;

function createStore(reducer, preloadedState, enhancer){

    // if(enhancer !== undefined){
    //     enhancer(createStore)(reducer, preloadedState)
    // }


    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = [];
    let nextListeners = currentListeners;
    let isDispatching = false;

    function dispatch(action){
        //检查是否是 palin object
        //检查是否已经在dispacthing

        try{
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        }finally {
            isDispatching = false;
        }

        const listeners = (currentListeners = nextListeners);

        for(let i = 0; i< listeners.length; i++){
            const listener = listeners[i];
            listener();
        }
        return action;
    }

    //订阅的函数
    function subscribe(listener){

        let isSubscribe = true;

        nextListeners.push(listener);

        //订阅之后立马返回一个反订阅的函数
       return function unSubscribe(){
            if(!isDispatching){
                return;
            }

            isDispatching = false;
            const index = nextListeners.indexOf(listener);
            nextListeners.split(index,1);
            currentListeners = null;
       }
    }

    function getState(){

        if(isDispatching){
            throw new Error('Is dispatching')
        }

        return currentState;
    }

    dispatch({type: 'redux'})

    return {
        dispatch,
        subscribe,
        getState,
    }

}