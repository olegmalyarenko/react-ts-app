import React, { FC } from 'react';
import { Menu, Row, Col } from 'antd';


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
          <a target="_blank" rel="noopener noreferrer">
            Список
          </a>
        </Menu.Item>
        </Col>

        <Col span={4}>
        <Menu.Item key={Math.random() * Date.now()}>
          <a target="_blank" rel="noopener noreferrer">
            О нас
          </a>
        </Menu.Item>
        </Col>
      
      </Row>
      </Menu>
    );
};

export default Navigation;