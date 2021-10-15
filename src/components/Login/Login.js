import React from 'react'
import { Header } from '../layout/Header';
import LoginForm from './LoginForm';

import { Row, Col } from 'antd';
import { Footer} from 'antd/lib/layout/layout';

const Login = () => {
    
    
    return (
        <div className='main-container' >
          <Row>
            <Col span={24} > 
              <Header/>
            </Col>
          </Row>

          <Row className='login-form' justify="center"align="middle"   >
            <Col >
              <LoginForm/>
            </Col>
          </Row>
          <Row >
            <Col span={24} >
              <Footer>
              Copyright 2021 - DrakeTech Inc.
              </Footer>
            </Col>
          </Row>
          
         

        
        
      </div>
    )
}

export default Login
