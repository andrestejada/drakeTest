import React, {  useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  InputNumber,
  Col,
  Row
} from 'antd'
import { editTodo, saveNewTodo, } from '../../actions/todosActions'
import { useDispatch, useSelector } from 'react-redux'
import { UseForm } from '../../hooks/useForm'
const { Option } = Select

const FormTODOS = () => {
  const dispatch = useDispatch()
  const {todoSelected} = useSelector(state => state.todos)
  const children = ['bootstrap', 'firebase', 'sql', 'Nosql', 'Java'];

  useEffect(() => {
    setValues(todoSelected)
  }, [todoSelected])
  const initialState={
    title:'',
    description:'',
    hashtags:[],
    age:'',
    specialty:[],
  }
  const [values,OnchangeValues,reset,setValues]= UseForm(initialState)
  const {title,description,hashtags,age,specialty}= values

  const onFinish = (values) => {
    console.log(values)
    dispatch( saveNewTodo(values) )
    reset(initialState)
  };
  return (
    <div className='todo-box'>
        <h2> {todoSelected ?'Edit ToDo': 'Create ToDo' }</h2>
      <Form
        onFinish={onFinish}           
      >
        <Form.Item label='Title' rules={[{ required: true, }]} name='title' value={title} >
          <Input  name='title' value={title}onChange={OnchangeValues} />
        </Form.Item>
        <Form.Item label='Description' value={description}name='description'  >
          <Input value={description}name='description' onChange={OnchangeValues} />
        </Form.Item>
        <Form.Item name='hashtags'label='Select yours hashTags' >
          <Select mode='multiple' allowClear name='hashtags' >
            {children.map((elm, i) => (
              <Option key={i} value={elm} >{elm}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='Age' name='age' value={age} >
          <InputNumber name='age' value={age} />
        </Form.Item>

        <Form.Item name='specialty' label='Select your specialty'>
          <Checkbox.Group name='specialty'>
            <Row>
              <Col span={9}>
                <Checkbox value='front' style={{ lineHeight: '32px' }}>
                  FrontEnd
                </Checkbox>
              </Col>
              <Col span={9}>
                <Checkbox value='back' style={{ lineHeight: '32px' }}>
                  BackEnd
                </Checkbox>
              </Col>
              <Col span={9}>
                <Checkbox value='qa' style={{ lineHeight: '32px' }}>
                  QA
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 10,offset:6}}>
          {
            todoSelected 
            ?
              <Button type='primary' onClick={()=>dispatch( editTodo(todoSelected._id,values))}  block>
                Edit
              </Button>
            :
              <Button type='primary' htmlType='submit' block>
                Save
              </Button>
          }
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormTODOS
