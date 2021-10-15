import axios from "axios";
import { ADD_TODO, DELETE_TODO, EDIT_TODO, GET_ALL_TODOS, SELECT_TODO } from "../types/types";

const baseUrl =`https://crudcrud.com/api/857a63f365e7410f8319cd40a4888bf4/todos`

export const saveNewTodo =(data)=>{
    return async (dispatch)=>{
        try {            
            const resp =  (await axios.post(baseUrl,data)).data;
            dispatch( addNewTodo(resp) )
        } catch (error) {
            console.log(error)
        }
    }
}
const addNewTodo=(todo)=>({
    type:ADD_TODO,
    payload:todo
})


export const getAllTodos =()=>{
    return async (dispatch)=>{
        try {            
            const resp =  (await axios.get(baseUrl)).data
            dispatch( getTodos(resp) )
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }
}

const getTodos=(data)=>({
    type:GET_ALL_TODOS,
    payload:data
})

export const editTodo =(id,data)=>{
    console.log(id,data)     
    return async (dispatch)=>{
        try {       
            const resp =  await axios.put(`${baseUrl}/${id}`,data)
            dispatch(editTodoAction(data))
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }
}

const editTodoAction=(todo)=>({
    type:EDIT_TODO,
    payload:todo
})

export const todoSelect =(id)=>({
    type:SELECT_TODO,
    payload:id
})
export const deleteTodo =(id)=>{
    return async (dispatch)=>{
        try {            
            const resp =  (await axios.delete(`${baseUrl}/${id}`))
            dispatch( deleteTodoAction(id) )
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }
}

const deleteTodoAction=(id)=>({
    type:DELETE_TODO,
    payload:id
})

