import * as React from 'react'
import './style.css'

export default class App extends React.Component {
    render() {
        return <>
            <div id='window-head'>
                <span id='window-title'>人生管理器</span>
                <span id='window-toolbar'>
                    <span id='min-window'>－</span>
                    <span id='max-window'>＋</span>
                    <span id='close-window'>ｘ</span>
                </span>
            </div>
            <div id='window-body'>
                <div id='panel'>
                    <div className='panel-item selected'>任务管理</div>
                </div>
                <div id='container'>
                    <div className='toolbar'>
                        <span className='btn'>新</span>
                        <span className='btn'>改</span>
                        <span className='btn'>删</span>
                    </div>
                </div>
            </div>
        </>
    }
}