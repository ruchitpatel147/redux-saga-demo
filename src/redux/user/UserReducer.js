const intialState = {
    users: [],
    loading: false,
    error: null
};

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_USER_REQUESTED':
            return {
                ...state,
                loading: true
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case 'GET_USER_FAILED':
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
};

export default userReducer