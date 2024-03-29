import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.username);
    
  
  const menu = (
    <Menu>
        <Menu.Item>
        <a href="/" >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/admin"  >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  const menu1 = (
    <Menu>
        <Menu.Item>
        <a href="/" >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/userbookings">
          Bookings
        </a>
      </Menu.Item>
      
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  var drop = menu1;
    if(user.username==="admin"){
      drop = menu;
    }
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>Rent-O-Cars</Link></b></h1>
{/*           
             <Button onclick={()=>{
                if(user.username === "admin")
                  return <Dropdown overlay={menu} placement="bottomCenter"></Dropdown>
                else
                  return <Dropdown overlay={menu1} placement="bottomCenter"></Dropdown>
             }}>{user.username}</Button> */}
          
          <Dropdown overlay={drop} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
         
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
      <hr />

           <p>Desinged and Developed By</p>

           

           <p>Shikhar Gupta</p>
          
      </div>
    </div>
  );
}


export default DefaultLayout;
