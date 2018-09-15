import * as React from 'react'
import './style.css'

export default class TaskManager extends React.Component<{ data: Array<any> }, { data: Array<any>, tableData: Array<any> }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.data,
            tableData: []
        };
    }
    componentDidMount() {
        this.update()
    }
    update() {
        var newTableData = []
        for (let i = 0; i < this.state.data.length; i++) {
            const line = this.state.data[i];
            var newLine = []
            newLine.push(<td><input type='checkbox'></input></td>)
            for (let j = 0; j < line.length; j++) {
                const cell = line[j];
                newLine.push(<td key={i + ',' + j} onClick={this.handleClick.bind(this, i + ',' + j)}>{cell} </td>)
            }
            newTableData.push(newLine)
        }
        newTableData = newTableData.map((value: any) =>
            <tr key={value}>{value}</tr>
        )
        newTableData.push(<tr><td></td><td><button>新增</button></td></tr>)
        this.setState({
            tableData: newTableData
        })
    }
    handleClick(button: string) {
        if (button == 'new') {
            console.log(button);
            var tmpData = this.state.data
            tmpData.push(this.state.data[this.state.data.length - 1])
            this.setState({ data: tmpData })
            this.update()
        } else if (button == 'modify') {
            console.log(button);
        } else if (button == 'delete') {
            console.log(button);
        } else {
            console.log(button);
        }
    }
    render() {
        return <>
            <div className='toolbar'>
                <span className='btn' onClick={this.handleClick.bind(this, 'new')}>新</span>
                <span className='btn' onClick={this.handleClick.bind(this, 'modify')}>改</span>
                <span className='btn' onClick={this.handleClick.bind(this, 'delete')}>删</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>任务名称</th>
                        <th>负责人</th>
                        <th>开始时间</th>
                        <th>完成时间</th>
                        <th>工期</th>
                        <th>当前状态</th>
                        <th>备注</th>
                        <th>更新时间</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData}
                </tbody>
            </table>
        </>
    }
}