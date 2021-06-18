import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import VideosListItem from "./VideosListItem";
import { useDispatch } from "react-redux";
import { getVideos } from "../../redux/actions/actions";
import {v4} from "uuid";
function VideosListContainer() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.videosList.videos);
    // const [videos,setVideos] = useState(list);
    useEffect(()=>{
        dispatch(getVideos());
    },[dispatch]);
    return (
        <>
            {
                list.map((item)=>(
                    <VideosListItem key={v4()} title={item.snippet.title} path={item.snippet.thumbnails.default.url} id={item.id.videoId} />
                ))
            }
        </>
    );
}

export default VideosListContainer;