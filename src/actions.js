import axios from "axios"

export const fetchQuote = () => {
    return dispatch => {
        dispatch(fetchQuoteBegin());
        axios.get(`https://talaikis.com/api/quotes/random/`)
            .then(result => {
                dispatch(fetchQuoteEnd(result.data))
            })
    }
};

const fetchQuoteBegin = () => {
    return {
        type: "FETCH_QUESTION_BEGIN"
    }
};

const fetchQuoteEnd = (data) => {
    return {
        type: "FETCH_QUESTION_END",
        payload: data
    }
};
