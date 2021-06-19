import React, { useEffect } from 'react';
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoInfo } from "../../redux/actions/actions";
import { Box, Grid, Typography } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CommentIcon from '@material-ui/icons/Comment';
import "./style.scss"

function Player() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const info = useSelector(state => state.singleVideo.videoInfo)
    useEffect(() => {
        dispatch(getVideoInfo(id));
    }, [dispatch, id])
    const opts = {
        width: "100%"
    }
    return (
        <Box className="player-container">
            <Box className="video-palyer-container">
                <YouTube className="video-player" videoId={id} opts={opts} />
            </Box>

            <Box className="video-info">
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant={"h6"}>{info.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{info.desc || "nothing here)"}</Typography>
                    </Grid>
                    <Grid item className="counters-container">
                        <Grid container direction="row" justify="space-around">
                            <Grid item>
                                <VisibilityIcon />
                                <Box component="span">{info.stats.viewCount}</Box>
                            </Grid>
                            <Grid item>
                                <ThumbUpIcon />
                                <Box component="span">{info.stats.likeCount}</Box>
                            </Grid>
                            <Grid item>
                                <BookmarkIcon/>
                                <Box component="span">{info.stats.favoriteCount}</Box>
                            </Grid> 
                            <Grid item>
                                <CommentIcon/>
                                <Box component="span">{info.stats.commentCount}</Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </Box>


    );
}

export default Player;