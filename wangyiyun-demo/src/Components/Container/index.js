import React, {Component} from 'react'
import CustomList from '../custom/CustomList';
import Sider from '../Sider'

class Containers extends Component {
    render() {
        return (
            <div>
	            <CustomList/>
	            <Sider/>
            </div>
        )
    }
}
export default Containers