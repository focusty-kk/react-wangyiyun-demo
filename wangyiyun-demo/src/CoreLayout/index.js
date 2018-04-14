/**
 * Created by yanghui on 2018/4/7.
 */
import React, {Component} from 'react';
import Header from '../Components/Header'
import Container from '../Components/Container'
import Footer from '../Components/Footer'

import {Layout} from 'antd';

// const { Header, Footer, Sider, Content } = Layout;

class CoreLayout extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header/>
                    <Container/>
                    <Footer/>
                </Layout>
            </div>
        )
    }
}

export default CoreLayout