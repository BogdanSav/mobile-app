import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import { setVideoInfo, setVideos } from "../actions/actions"
import { GET_VIDEOS_LIST, GET_VIDEO_INFO } from "../actions/types";
const videoListURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCP_IYZTiqbmUqmI3KXHIEoQ&key=${process.env.REACT_APP_TOKEN_API}&maxResults=50`;
const singleVideoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=`;

function* sagaWatcher() {
    yield all([
        takeEvery(GET_VIDEOS_LIST, videosList),
        takeEvery(GET_VIDEO_INFO, videoInfo)
    ]);
}


function* videosList() {
    const response = yield fetch(videoListURL);
    const data = yield response.json();

    yield put(setVideos(data.items));
}

function* videoInfo() {
    const id = yield select(state => state.singleVideo.videoID);

    const response = yield fetch(singleVideoURL + id + `&key=${process.env.REACT_APP_TOKEN_API}`);
    const videoData = yield response.json();

    yield put(setVideoInfo({
        title: videoData.items[0].snippet.title,
        desc: videoData.items[0].snippet.description,
        thumbnail: videoData.items[0].snippet.thumbnails.standard,
        stats: videoData.items[0].statistics
    }))
}
export default sagaWatcher;