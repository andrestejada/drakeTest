import { LOGIN_SUCCESS} from "../types/types";

const initialState={
    isAuth:false,    
    user:{}
}


export const authReducer =(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:            
            return{
                ...state,
                isAuth:true,
                user:action.payload,
            }       
    
        default:
            return state ;
        }
}