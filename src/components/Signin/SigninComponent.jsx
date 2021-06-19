import React, { useCallback } from 'react';
import { GoogleLogin } from "react-google-login";
import { Box, Grid } from "@material-ui/core";
import FacebookLogin from 'react-facebook-login';
import { useHistory } from "react-router-dom";
import "./style.scss"
function SigninComponent() {
    const history = useHistory();

    const handleSuccess = useCallback((res) => {
        console.log("signed in");
        history.push("/list");
    }, [history]);

    const handleFailure = (res) => {
        alert(`error: ${res.error}`)
    }
    const responseFacebook = useCallback(() => {
        history.push("/list");
    }, [history])
    return (
        <Box className="signin">
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item className="item">
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        buttonText="login via google"
                        onSuccess={handleSuccess}
                        onFailure={handleFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={false}
                    />
                </Grid>
                <Grid item className="item">
                    <FacebookLogin
                        appId="531147164749384"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook} />
                </Grid>
            </Grid>


        </Box>


    );
}

export default SigninComponent;