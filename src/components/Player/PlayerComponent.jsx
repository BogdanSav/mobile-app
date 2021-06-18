import React, { useEffect } from 'react';
import YouTube from "react-youtube";
// import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getVideoInfo} from "../../redux/actions/actions";

function Player(){
    const dispatch =useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getVideoInfo(id));
    },[dispatch,id])
   return (
      <YouTube videoId={id}/>
   );
}

export default Player;