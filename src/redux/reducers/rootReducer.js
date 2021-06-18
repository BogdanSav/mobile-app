import { combineReducers } from "redux";
import videosListReducer from "./videosListReducer";
import singleVideoReducer from "./singleVideoReducer";
const rootRueducer = combineReducers({
    videosList: videosListReducer,
    singleVideo: singleVideoReducer
})
export default rootRueducer;