import axios from "axios";

export const loginCall = async(userCredential, dispatch)=>{
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("api/auth/login", userCredential);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});     
        // console.log(res.data)
    } catch (err) {
        dispatch({type: "LOGIN_FAILURE", payload: err});
    }
}