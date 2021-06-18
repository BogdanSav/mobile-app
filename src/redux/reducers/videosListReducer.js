import { SET_VIDEOS_LIST } from "../actions/types";

const initialState = {
    currentVideoId: "",
    videos: []
};

function videosListReducer(state = initialState, action) {
    switch (action.type) {
        case SET_VIDEOS_LIST:
            console.log(action.payload);
            return {...state, videos: state.videos.concat(action.payload) };
        default:
            return state;
    }
}
export default videosListReducer;