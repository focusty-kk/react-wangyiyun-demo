import React, {Component} from 'react';
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;

class Sider extends Component {
	state = {
		mode: 'inline',
		theme: 'light',
	}
	changeMode = (value) => {
		this.setState({
			mode: value ? 'vertical' : 'inline',
		});
	}
	changeTheme = (value) => {
		this.setState({
			theme: value ? 'dark' : 'light',
		});
	}
	render() {
		return (
			<div>
{/*				<Switch onChange={this.changeMode} /> Change Mode
				<span className="ant-divider" style={{ margin: '0 1em' }} />
				<Switch onChange={this.changeTheme} /> Change Theme*/}
				<Menu
					style={{ width: 256 }}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="light"
				>
					<Menu.Item key="1">
						<Icon type="mail" />
						发现音乐
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="calendar" />
						私人FM
					</Menu.Item>
					<SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
					</SubMenu>
				</Menu>
			</div>
		);
	}
}

export default Sider;