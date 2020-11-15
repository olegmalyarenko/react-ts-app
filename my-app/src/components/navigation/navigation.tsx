import React, { FC } from 'react';
import { Menu, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';


const Navigation: FC = () => {

    return (
        <Menu  mode="horizontal">
        <Row justify="space-around">
       

        <Col span={8}>
        <Menu.Item key={Math.random() * Date.now()}>
          React + TypeScript Todolist
        </Menu.Item>
        </Col>

        
        <Col span={4}>
        <Menu.Item key={Math.random() * Date.now()}>
          <NavLink to='/'>
            Список дел
          </NavLink>
        </Menu.Item>
        </Col>

        <Col span={4}>
        <Menu.Item key={Math.random() * Date.now()}>
          <NavLink to='/about'>
            О нас
          </NavLink>
        </Menu.Item>
        </Col>
      
      </Row>
      </Menu>
    );
};

export default Navigation;