import * as React from 'react'
import './style.css'
import TaskManager from './TaskManager';

export default class App extends React.Component<{}, {}> {
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
                    <TaskManager data={[[123]]} />
                </div>
            </div>
        </>
    }
}