import React from 'react'
import { BrowserRouter, Switch, Route, Link,Redirect,NavLink } from 'react-router-dom'
import { Login, Home, Lx, List, Basic, Hoc, Hook, App } from './assembly'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Lx} />
          <Route path="/" render={()=>{
            let token = localStorage.getItem('auth')
            if(!token){
             return <Redirect to="/login"/>
            }else{
              return(
                <Layout>
                  <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                      console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                      console.log(collapsed, type);
                    }}
                  >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1" icon={<UserOutlined />}>
                         <NavLink to="/home">评委管理</NavLink>
                      </Menu.Item>
                      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                         <NavLink to="/hoc">参赛管理</NavLink>
                      </Menu.Item>
                      <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                      </Menu.Item>
                      <Menu.Item key="4" icon={<UserOutlined />}>
                        nav 4
                      </Menu.Item>
                    </Menu>
                  </Sider>
                  <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                           <Route path="/home" component={Home} />
                           <Route path="/hoc" component={Hoc} />
                      </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                  </Layout>
                </Layout>
              )
            }
          }}/>
          
        </Switch>
      </BrowserRouter>
    )
  }
}





