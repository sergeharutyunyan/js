const initialState = []


function reducer(state, action) {
   /* if (action.type === 'ADD_NAME') {
        return [...state, action.payload]
    }
    if (action.type === 'DELETE_NAME') {
        return state.filter(personName => personName !== action.payload)
    }
    /!*    if (action.type === 'CLEAR_NAMES') {
            return state.splice(0, 0);
        }*!/
    if (action.type === 'CLEAR_NAMES') {
        return []
    }
    return state*/

    switch (action.type) {
        case 'ADD_NAME' :
            return [...state, action.payload];
        case 'DELETE_NAME' :
            return state.filter(personName => personName !== action.payload);
        case 'CLEAR_NAMES' :
            return [];
        default:
            return state;
    }
}

let newState = reducer(initialState, {type: 'ADD_NAME', payload: 'Bogdan'})


console.log(newState)

newState = reducer(newState, {type: 'ADD_NAME', payload: 'Vardan'})


console.log(newState)

newState = reducer(newState, {type: 'DELETE_NAME', payload: 'Vardan'})


console.log(newState)


newState = reducer(newState, {type: 'CLEAR_NAMES'})


console.log(newState)

newState = reducer(initialState, {type: 'ADD_NAME', payload: 'Bogdan1'})


console.log(newState)

newState = reducer(newState, {type: 'ADD_NAME', payload: 'Vardan1'})


console.log(newState)
