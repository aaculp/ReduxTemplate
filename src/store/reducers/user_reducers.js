export default function userReducer(state = {}, action) {
    switch (action.type) {
        case "":
            return action.payload
        default:
            return state;
    }
}