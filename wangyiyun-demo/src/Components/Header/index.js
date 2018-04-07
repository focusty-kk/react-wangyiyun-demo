import React, {Component} from 'react'
import {Icon} from 'antd-mobile'
//import 'antd-mobile/dist/'
import 'antd-mobile/dist/antd-mobile.css'

import './Header.css'
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
                    <Icon type="cross-circle" className="icon-bg" size="xxs" color="yellow" />
                    <Icon type="cross-circle" size="xxs" color="yellow" />
                    <Icon type="down-circle" size="xxs" color="yellow" />
                </div>
            </div>
        )
    }
}
export default Header