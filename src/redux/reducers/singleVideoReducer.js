import { SET_VIDEO_INFO, GET_VIDEO_INFO } from "../actions/types";

const initialState = {
    videoID: "",
    videoInfo: {
        title: "",
        desc: "",
        stats: {}
    }
};

function singleVideoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEO_INFO:
            return {...state, videoID: action.payload }
        case SET_VIDEO_INFO:
            console.log(action.payload);
            return {...state, videoInfo: action.payload };
        default:
            return state;
    }



}
export default singleVideoReducer;