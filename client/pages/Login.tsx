import React from "@types/react";
import GoogleLogin from "react-google-login";
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {LoginSuccess} from '../src/redux/auth/action'
 
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const responseGoogle = async (response: any) => {
        console.log(response);
        const tokenId = response?.tokenId
        const res = await axios.post('users/google-login', { id_token: tokenId })
        const { user, token } = res.data
        if (res.status === 200){
          navigate('/ ')
        }
        localStorage.setItem('access_token', token)
        dispatch (LoginSuccess(user))
      } 
    return <div>
        <h1>Login with google</h1>
        <GoogleLogin
        clientId="778333921973-cth3qlo28hl0p6qk5ishikvkchfl3udr.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
}

export default Login


