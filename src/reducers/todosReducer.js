import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_ALL_TODOS, SELECT_TODO} from "../types/types";

const initialState={
    allTodos:[],
    todoSelected:false
}


export const todoReducer =(state=initialState,action)=>{
    switch (action.type) {
        case GET_ALL_TODOS:            
            return{
                ...state,
                allTodos:action.payload
            }
        case DELETE_TODO:            
            return{
                ...state,
                allTodos: state.allTodos.filter( t=> t._id !== action.payload )
            }       
        case ADD_TODO:            
            return{
                ...state,
                allTodos: [...state.allTodos,action.payload]
            }       
        case SELECT_TODO:            
            return{
                ...state,
                todoSelected: state.allTodos.find( t=> t._id === action.payload)
            }       
        case EDIT_TODO:            
            return{
                ...state,
                allTodos: state.allTodos.map( t=> t._id === action.payload._id
                    ? action.payload
                    :t),
                todoSelected:false    
            }       
    
        default:
            return state ;
        }
}