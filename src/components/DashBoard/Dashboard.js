import { Header } from '../layout/Header'
import React, { useEffect } from 'react'
import { Footer } from 'antd/lib/layout/layout'
import FormTODOS from './FormTODOS'
import TableToDos from './TableToDos'
import { useDispatch } from 'react-redux'
import { getAllTodos } from '../../actions/todosActions'

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return (
        <div className='main-container' >
            <Header/>
            <h2>Welcome to TODOS APP</h2>
            <FormTODOS/>
            <TableToDos/>
            <Footer>
              Copyright 2021 - DrakeTech Inc.
            </Footer>
        </div>
    )
}

export default Dashboard
