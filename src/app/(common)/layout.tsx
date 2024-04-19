'use client'


import React, { ReactNode, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Link from 'next/link';
import { HiOutlineHome, HiOutlineShoppingBag } from 'react-icons/hi';

const { Header, Sider, Content } = Layout;

const DashboardPage = ({children}:{children:ReactNode}) => {



  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'techZone',
              label: <Link href='/'><span className='text-3xl font-semibold my-3 block text-white'>TechZon</span></Link>,
            },
            {
              key: 'dashboard',
              icon: <HiOutlineHome />,
              label: <Link href='/dashboard'>Dashboard</Link>,
            },
            {
              key: 'dashboard/products',
              icon: <HiOutlineShoppingBag />,
              label: <Link href='/dashboard/products'>Products</Link>,
            },
            {
              key: 'dashboard/products/add-products',
              icon: <HiOutlineShoppingBag />,
              label: <Link href='/dashboard/products/add-products'>Add Product</Link>,
            },
            {
              key: 'dashboard/orders',
              icon: <HiOutlineShoppingBag />,
              label: <Link href='/dashboard/orders'>Orders</Link>,
            },
            {
              key: 'dashboard/my-orders',
              icon: <HiOutlineShoppingBag />,
              label: <Link href='/dashboard/my-orders'>My Orders</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;