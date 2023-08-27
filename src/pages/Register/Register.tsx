import React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import { Sidebar } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';
import { DescriptionSpace } from '../../components/DescriptionSpace';
import { Forms } from '../../components/Forms';
import { Functionary } from '../../components/Functionary';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const { Sider, Content } = Layout;

export function Register (){
  const showForm = useSelector((state:RootState) => state.form.status)

  return(
    <Space.Compact block direction="horizontal">
      <Sider width={'58px'} style={{ minHeight: '100', backgroundColor: '#F2F2F2'}}>
        <Sidebar />
      </Sider>
      <Layout>
        <Content>
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <Navbar />
            </Col>
            <Col className="gutter-row" span={8} style={{display:'flex', justifyContent:'end'}}>
              <DescriptionSpace />
            </Col>
            <Col className="gutter-row" span={16} style={{display:'flex', flexDirection: 'column', justifyContent:'start'}}>
              <div className="form-container">
                { showForm ?
                  <Forms/>
                  :
                  <Functionary />
                }
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Space.Compact>
  )
};