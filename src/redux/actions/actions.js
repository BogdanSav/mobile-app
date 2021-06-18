import { GET_VIDEOS_LIST, SET_VIDEOS_LIST, GET_VIDEO_INFO, SET_VIDEO_INFO } from "./types"

export function getVideos() {
    return {
        type: GET_VIDEOS_LIST
    }
}
export function setVideos(payload) {
    return {
        type: SET_VIDEOS_LIST,
        payload
    }
}
export function getVideoInfo(payload) {
    return {
        type: GET_VIDEO_INFO,
        payload

    }
}
export function setVideoInfo(payload) {
    return {
        type: SET_VIDEO_INFO,
        payload
    }
}