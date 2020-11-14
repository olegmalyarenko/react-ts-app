import React, { FC } from 'react';
import { Menu, Row, Col } from 'antd';
const { SubMenu } = Menu;


const Navigation: FC = () => {

    return (
        <Menu  mode="horizontal">
        <Row justify="space-around">
       

        <Col span={4}>   
        <Menu.Item key="mail">
          Navigation One
        </Menu.Item>
        </Col> 

        <Col span={4}>
        <Menu.Item key="app">
          Navigation Two
        </Menu.Item>
        </Col> 

        <Col span={4}>
        <SubMenu key="SubMenu" title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        </Col> 

        <Col span={4}>
        <Menu.Item key="alipay">
          <a target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
        </Col>
      
      </Row>
      </Menu>
    );
};

export default Navigation;