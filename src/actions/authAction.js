import axios from 'axios'
import { LOGIN_SUCCESS } from '../types/types';

export const signIn =(data)=>{
    return async (dispatch)=>{
        try {            
            const resp =  (await axios.post('http://dev.nexttruck.draketechdev.ca:3600/api/login',data)).data;
            dispatch( loginSuccess(resp) )
        } catch (error) {
            console.log(error)
        }
    }
}

const loginSuccess=(user)=>({
    type:LOGIN_SUCCESS,
    payload:user
})