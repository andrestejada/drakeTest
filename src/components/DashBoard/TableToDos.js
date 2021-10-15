import { DeleteOutlined, EditOutlined,  } from '@ant-design/icons/lib/icons';
import { Button,  Table, Tag } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, todoSelect } from '../../actions/todosActions';

const TableToDos = () => {
    const {allTodos} = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'tile',          
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Specialty',
          dataIndex: 'specialty',
          key: 'specialty',
          render: (specialty=[]) => (
            <>
              {specialty.map((tag) => {                
                return (
                  <span className='specialty'key={tag}>
                    {tag + " "}
                  </span>
                );
              })}
            </>
          ),
        },
        {
          title: 'Tags',
          key: 'hashtags',
          dataIndex: 'hashtags',
          render: (hashtags=[]) => (
            <>
              {hashtags.map((tag) => {                
                return (
                  <Tag color={'blue'} key={tag}>
                    {tag}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <>
            <Button onClick={()=>dispatch(todoSelect(text._id))} shape="circle" icon={<EditOutlined />} />            
            <Button onClick={()=>dispatch( deleteTodo(text._id) )} shape="circle" icon={<DeleteOutlined />} />
            </>  
          ),
        },
      ];
      
    
      
    return (
        <div className='table-todo-box' >
            <Table columns={columns} dataSource={allTodos} />
        </div>
    )
}

export default TableToDos
