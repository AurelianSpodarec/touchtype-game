const initialState = {
    mode: 1, //null
    currentLevel: 1, //null,
    screen: 1,
    paused: false,
}

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CURRENT_LEVEL':
            return { ...state, currentLevelID: action.type }
        default:
            return state
    }
}

export default gameReducer;