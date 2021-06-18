import React, { useCallback } from 'react';
import { GoogleLogin } from "react-google-login";

import {useHistory} from "react-router-dom";
function SigninComponent() {
    const history = useHistory();
    
    const handleSuccess = useCallback((res) => {
        console.log("signed in");
        document.cookie = res.accessToken;
        console.log(res.accessToken);
        history.push("/list/");
    }, [history]);

    const handleFailure = (res) => {
        alert(`error: ${res.error}`)
    }
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="login via google"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
        />

    );
}

export default SigninComponent;