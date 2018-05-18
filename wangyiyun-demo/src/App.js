import React, { Component } from 'react';
import {createStore} from 'redux';  // 需要使用redux的createStore方法创建store
import {Provider} from 'react-redux';
import indexReducer from './redux/indexReducer';
import CoreLayout from './CoreLayout'

import "./App.css"
import "antd/dist/antd.min.css"
const store = createStore(indexReducer);

/*Provider设置store 通过 creatStore => reducer*/
class App extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <CoreLayout/>
            </div>
        </Provider>
    )
  }
}

export default App;
