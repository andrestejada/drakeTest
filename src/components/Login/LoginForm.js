import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signIn } from '../../actions/authAction';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch( signIn(values) )
      };
    return (
        <div className='form-login-conntainer' >
        <h3>Log In</h3>
            <Form
                name="normal_login"               
                initialValues={{
                    email: "", 
                    password: "" 
                }}
                onFinish={onFinish}
        >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>      
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>        
        </Form.Item>
      </Form>

        </div>
       
    )
}

export default LoginForm

