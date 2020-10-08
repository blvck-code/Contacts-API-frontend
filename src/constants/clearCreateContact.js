import { CLEAR_ADD_CONTACT } from "./types"

export default () => dispatch => {
    dispatch({
        type: CLEAR_ADD_CONTACT
    })
}