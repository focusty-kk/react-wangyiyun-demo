import React, { Component } from 'react';
import {createStore} from 'redux';  // 需要使用redux的createStore方法创建store
import {Provider} from 'react-redux';
import indexReducer from './redux/indexReducer';
import CoreLayout from './CoreLayout'

import "./App.css"
import "antd/dist/antd.min.css"
const store = createStore(indexReducer);
class App extends Component {
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
