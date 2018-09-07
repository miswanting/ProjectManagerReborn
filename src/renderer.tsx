import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ipcRenderer } from "electron";
// 前端选择
// antd
// import App from "./antd/App";
// sematic-ui-react
// import App from "./sematic-ui-react/App";
// bootstrap
import App from "./bootstrap/App";

function update() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
}
update()