import * as React from 'react'
import './style.css'

export default class App extends React.Component<{}, { data: Array<any>, tableData: Array<any> }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                ['任务名称', '负责人', '开始时间', '完成时间', '工期', '当前状态', '详细信息', '备注'],
                ['任务名称', '负责人', '开始时间', '完成时间', '工期', '当前状态', '详细信息', '备注']
            ],
            tableData: []
        };

        this.update()
    }
    update() {
        var newTableData = []
        for (let i = 0; i < this.state.data.length; i++) {
            const line = this.state.data[i];
            if (i == 0) {
                newTableData.push(line.map((value: any) =>
                    <th>{value}</th>
                ))
            } else {
                newTableData.push(line.map((value: any) =>
                    <td>{value}</td>
                ))
            }
        }
        newTableData = newTableData.map((value: any) =>
            <tr>{value}</tr>
        )
        this.setState({
            tableData: newTableData
        })
    }
    handleClick(button: string) {
        if (button == 'new') {
            console.log(button);
            var tmpData = this.state.data
            tmpData.push(this.state.data[this.state.data.length-1])
            this.setState({ data: tmpData })
            this.update()
        } else if (button == 'modify') {
            console.log(button);
        } else if (button == 'delete') {
            console.log(button);
        }
    }
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
                        <span className='btn' onClick={this.handleClick.bind(this, 'new')}>新</span>
                        <span className='btn' onClick={this.handleClick.bind(this, 'modify')}>改</span>
                        <span className='btn' onClick={this.handleClick.bind(this, 'delete')}>删</span>
                    </div>
                    <table>
                        {this.state.tableData}
                    </table>
                </div>
            </div>
        </>
    }
}