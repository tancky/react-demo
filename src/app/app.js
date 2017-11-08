
// 引入样式文件
import 'antd/dist/antd.css';
import '../static/css/index.css';


import React from "react";
import ReactDOM from "react-dom";
import App from "./components/dashboard";


ReactDOM.render(
    <App />,
    document.querySelector('#app')
);