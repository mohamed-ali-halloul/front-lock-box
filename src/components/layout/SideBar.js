import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    
    InboxOutlined,
    
  } from '@ant-design/icons';
import {useHistory}  from 'react-router';
import './SideBar.css';
const SideBar= () => {
    const history = useHistory();
    const { SubMenu } = Menu;

    const handleboxClick = () => {
        history.push('/createbox');
    }

    const handlecabineClick = () => {
        history.push('/createcabine');
    }

    const handleoneboxClick = () => {
        history.push('/readBox');
    }
    const handleCabinesClick=()=>{
      history.push('/readcabines');
    }
    const handleProfileClick=()=>{
      history.push('/profile');   }
  return (
      <div>
        <div style={{margin: "16px"}}></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub3']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub2" icon={<InboxOutlined />} title="Box">
            <Menu.Item key="5" onClick={handleboxClick}>Create Box </Menu.Item>
            <Menu.Item key="6" onClick={handleoneboxClick}>Boxes</Menu.Item>
            <Menu.Item key="7" >Box</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub3" icon={<InboxOutlined />} title="Cabine">
            <Menu.Item key="9" onClick={handlecabineClick}>Create Cabine</Menu.Item>
            <Menu.Item key="10">Cabine</Menu.Item>
            <Menu.Item key="11" onClick={handleCabinesClick}>Cabines</Menu.Item>
          </SubMenu>
          <Menu.Item key="sub1" onClick={handleProfileClick} style={{color: 'white'}} icon={<UserOutlined /> }>Profile</Menu.Item>
        </Menu>
        </div>
  );
}

export default SideBar;