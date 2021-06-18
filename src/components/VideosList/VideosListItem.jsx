import React from 'react';
import { useHistory } from "react-router-dom";
const style = {
    display: "flex",
    justifyContent: "space-around",
    direction: "row",
    width: "300px",
    alignItems: "center",
    cursor: "pointer"
}

function VideosListItem({ title, path, id }) {
    const history = useHistory();
    const openVideo = () => {
        history.push(`/player/${id}`)
    }
    return (
        <div style={style} onClick={openVideo}>
            <img src={path} alt="thumbnail" />
            <p>{title}</p>
        </div>

    );
}

export default VideosListItem;