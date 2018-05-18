import React, {Component} from 'react'
import { Divider,Input,Icon,Row,Col } from 'antd';
import style from './Header.css'
import common from '../../styles/common.css'


const Search = Input.Search;

class Header extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			age: 999,
			searchResult:{
				text:""
			}
		}
	}
	render() {
		return (
			<div className="Header">
				<section className={`${style.header_height} ${common.base_bg_red_color} ${common.over_hide} ${common.over_hide}`}>
					<Row className={common.padding_top_25rem}>
						<Col span={4}  >
							<Icon type="close-circle" className={`${common.padding_25rem} ${style.close_bg_color}`} style={{marginLeft:".25rem"}}/>
							<Icon type="minus-circle" className={`${common.padding_25rem} ${style.to_small_bg_color}`} />
							<Icon type="plus-circle" className={`${common.padding_25rem} ${style.to_large_bg_color}`} />
						</Col>
						<Col span={4} offset={16} className={common.text_right} >
							<Icon type="down-square" className={common.margin_25rem} />
						</Col>
					</Row>
					<Row className={`${style.height_45}`}>
						<Col span={8} >
							<div className={`${common.flex_wrap_left} ${style.height_45}`}>
								<img className={`${common.padding_left_250rem}`} src={require("../../asseat/icon/wangyi_yunyinyue_music.png")} alt="" />
								<span className={`${common.fz_18} ${common.font_weight600} ${common.margin_left_100rem} ${common.white_color}`}>网易云音乐</span>
							</div>
						</Col>
						<Col span={2} >
							<div className={`${common.flex_wrap_left} ${style.height_45}`}>
								<div className={`${common.display_inline_block} ${style.border_btn_left} ${style.box_shadow}`} style={{marginRight:"1px"}}>
									<Icon type="left" className={`${common.font_weight600} ${common.white_color}`} />
								</div>
								<div className={`${common.display_inline_block} ${style.border_btn_right} ${style.box_shadow}`}>
									<Icon type="right" className={`${common.font_weight600} ${common.white_color}`} />
								</div>
							</div>
						</Col>
						<Col span={8} >
							<div className={`${common.flex_wrap_left} ${style.height_45}`}>
								<Search
									placeholder="搜索音乐，歌手，歌词，用户"
									// value={this.state.searchResult.text}
									onSearch={(value)=>{
										console.log(value)
									}}
									style={{width:"300px"}}
								/>
							</div>
						</Col>
					</Row>
				</section>
			</div>
		)
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		searchResult: state.searchResult
// 	};
// };

//
// Header = connect(mapStateToProps)(Header)

export default Header