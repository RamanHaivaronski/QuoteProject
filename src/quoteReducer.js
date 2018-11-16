const initialState = {
    quest: null
};

export default function questionReducer(state = {...initialState}, action) {
    switch (action.type) {
        case "FETCH_QUESTION_END":
            return {quest: action.payload};
        case "CLOSE_QUESTION_END":
            return {quest: null, valid: null};
        case "CHECK_ANSWER_BEGIN":
            return {...state, picked: action.picked};
        case "CHECK_ANSWER_END":
            return {...state, valid: action.isValid};
        default:
            return state;
    }
}