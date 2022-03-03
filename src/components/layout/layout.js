import { Layout, Menu, Breadcrumb } from 'antd';

const AppLayout = (props) => {
    return (    <Layout>
        <Header className='header'>
          <NavBar />
          </Header>
            <Layout>
            <Sider width={200} className="site-layout-background">
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
          
             </Menu>
              </Sider>
             </Layout>
       
      </Layout>);
}
 
export default AppLayout;