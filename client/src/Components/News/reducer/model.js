import { getType, showModel, hideModel } from "../actions";
import { INIT_STATE } from "../constant";

export default function modelReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(showModel):
            return {
                isShow: true,
            }
        case getType(hideModel):
            return {
                isShow: false,
            }
        default: return state;
    }
}