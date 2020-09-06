import React from 'react'
import './styles.less'
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux'
import { loginUser } from '@/actions/login'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


export default @connect(()=>{

},{
  loginUser
}) 
class Login extends React.PureComponent {

   onFinish = values => {
    console.log('Success:', values);
    this.props.loginUser(values).then(res=>{
      console.log(res)
      if(res.payload.data.code == 200){
          message.info('登录成功')
          localStorage.setItem('auth',res.payload.data.result)
          this.props.history.push('/home')
          // 账号密码：niuxin123

      }else{
        message.error('账号或密码错误，请重新输入')
      }
    })
  };

   onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render () {
    return (
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="账号："
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码："
        name="passWord"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
  }
}






