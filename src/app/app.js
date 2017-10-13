
// 引入样式文件
import '../static/css/index.css';


import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/hello";


ReactDOM.render(
    <Hello />,
    document.querySelector('#app')
);