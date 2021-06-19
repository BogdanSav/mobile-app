import React from 'react';
import { useHistory } from "react-router-dom";
import { Box, Grid, Typography, Card, CardContent } from "@material-ui/core";
import "./style.scss"

function VideosListItem({ title, path, id }) {
    const history = useHistory();
    const openVideo = () => {
        history.push(`/player/${id}`)
    }
    return (
        <Box className="list-container" onClick={openVideo} >
            <Card className="list-item">
                <CardContent>
                    <Grid container direction="row" wrap="nowrap" justify="space-around">
                        <Grid item>
                            <img src={path} alt="thumbnail" />
                        </Grid>
                        <Grid item>
                            <Typography className="title" variant="body1">{title}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>


    );
}

export default VideosListItem;