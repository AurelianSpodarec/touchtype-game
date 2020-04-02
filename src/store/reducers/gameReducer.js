
const initialState = {
    mode: 1, //null
    level: 1, //null,
    screen: 1,
    paused: false,
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LEVEL':
            return { ...state, level: action.type }
        default:
            return state
    }
}

export default gameReducer;