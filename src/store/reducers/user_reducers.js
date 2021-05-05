import { ADD_NEWSLETTER, CLEAR_NEWSLETTER } from '../types'

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case ADD_NEWSLETTER:
            return { ...state, ...action.payload }
            break;
        case CLEAR_NEWSLETTER:
            return { ...state, ...action.payload }
            break;
        default:
            return state;
    }
}