// Action Type

export const RESET_STATE = "RESET_STATE";

export const RESET_STATE_FINAL = "RESET_STATE_FINAL";

// Input Field 
export const INPUT_INITIAL = "INPUT_INITIAL";

export const INPUT_FINAL = " INPUT_FINAL";
// SCORE 1
export const SCORE1_INITIAL = "SCORE1_INITIAL";

export const SCORE1_FINAL = "SCORE1_FINAL";

// SCORE2
export const SCORE2_INITIAL = "SCORE2_INITIAL";

export const SCORE2_FINAL = "SCORE2_FINAL";

export const INIT = "INIT"

// Action Creator
export const initilizeHandler = ()=>{
    return{
        type:INIT
    }
}
export const gameHandler = (event) => {
    return {
        type: INPUT_INITIAL,
        game: +event.target.value
    }
}
export const gameHandlerFinal = (game,score1,score2) => {
    return {
        type: INPUT_FINAL,
        game: game,
        score1:score1,
        score2:score2
    }
}
export const score1Handler = () => {
    return {
        type: SCORE1_INITIAL
    }
}
export const score1HandlerFinal = () => {
    return {
        type: SCORE1_FINAL
    }
}

export const score2Handler = () => {
    return {
        type: SCORE2_INITIAL
    }
}
export const score2HandlerFinal = () => {
    return {
        type: SCORE2_FINAL
    }
}

export const resetHandler = () => {
    return {
        type: RESET_STATE
    }
}

export const resetHandlerFinal = (state) => {
    return {
        type: RESET_STATE_FINAL,
        score1 : state.score1,
        score2: state.score2,
        game:state.game

    }
}

// Reducer

const initialState = {
    score1: 0,
    score2: 0,
    game: 5,
    disabled: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_INITIAL:
            return {
                ...state
            }
        case INPUT_FINAL:
            return {
                ...state,
                game: action.game,
                score1:action.score1,
                score2:action.score2
            };
        case SCORE1_INITIAL:
            return {
                ...state
            }
        case SCORE1_FINAL:
            return {
                ...state,
                score1: state.score1 + 1
            }
        case SCORE2_INITIAL:
            return {
                ...state
            }
        case SCORE2_FINAL:
            return {
                ...state,
                score2: state.score2 + 1
            }

        case RESET_STATE_FINAL:
            return { ...state,
            score1:action.score1,
            score2:action.score2,
            game:action.game,
     }
        default:
            return state;
    }
}

export default reducer;