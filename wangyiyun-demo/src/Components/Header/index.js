import React, {Component} from 'react'
import {Icon} from 'antd'

require("./Header.css");

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 999
        }
    }

    render() {
        return (
            <div className="Header">
                <div>
                    <a href="">111</a>
                    <Icon type="cross-circle" className="icon-bg" size="xxs" color="yellow"/>
                    <Icon type="cross-circle" size="xxs" color="yellow"/>
                    <Icon type="down-circle" size="xxs" color="yellow"/>
                </div>
            </div>
        )
    }
}

export default Header