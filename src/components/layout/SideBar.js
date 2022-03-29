import React from 'react';
import { Menu } from 'antd';
import {
    
    SnippetsOutlined,
    InboxOutlined,
    EuroOutlined,
  } from '@ant-design/icons';
import {useHistory, Link}  from 'react-router-dom';
import './SideBar.css';
const SideBar= () => {
    const history = useHistory();
    const { SubMenu } = Menu;
    const handlehomeClick=()=>{
      history.push("/home");
    }
    const handleboxClick = () => {
        history.push('/createbox');
    }

    const handlecabineClick = () => {
        history.push('/createcabine');
    }

    const handleoneboxClick = () => {
        history.push('/readboxes');
    }
    const handleCabinesClick=()=>{
      history.push('/readcabines');
    }
   const handlecreateTarifClick=()=>{
     history.push('/createTarif')
   }
   const handleTarif=()=>{
     history.push('/readtarifs') }
  return (
      <div >
        <div style={{margin: "8px"}}></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub3']}
          style={{ height: '100%', borderRight: 0 }}
        >
             <Menu.Item key="1" onClick={handlehomeClick} style={{textAlign:"left"}} icon={<SnippetsOutlined />}>
              
              Dashboard
           
              </Menu.Item>
          <SubMenu key="sub1" icon={<InboxOutlined />} title="Box">
            <Menu.Item key="1" onClick={handleboxClick}>Create Box </Menu.Item>
            <Menu.Item key="2" onClick={handleoneboxClick}>Boxes</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub2" icon={<InboxOutlined />} title="Cabine">
            <Menu.Item key="3" onClick={handlecabineClick}>Create Cabine</Menu.Item>
            <Menu.Item key="4" onClick={handleCabinesClick}>Cabines</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<EuroOutlined />} title="Tarif">
            <Menu.Item key="5" onClick={handlecreateTarifClick}>Create Tarif</Menu.Item>
            <Menu.Item key="6"onClick={handleTarif} >Tarifs</Menu.Item>
          </SubMenu>
        </Menu>
        </div>
  );
}

export default SideBar;