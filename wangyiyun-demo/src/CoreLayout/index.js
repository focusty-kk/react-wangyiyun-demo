/**
 * Created by yanghui on 2018/4/7.
 */
import React, { Component } from 'react';
import Header from '../Components/Header'
import Container from '../Components/Container'
import Footer from '../Components/Footer'

class CoreLayout extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        )
    }
}

export default CoreLayout