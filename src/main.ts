import { app, Menu, ipcMain, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
let win: BrowserWindow = null
// 启动前端
startElectron()
// 启动脚本
function startElectron() {
    app.on('ready', () => { // 启动程序
        createWindow()
    })
    app.on('window-all-closed', () => { // 窗口已全关闭
        // 退出程序
        console.log('[DEBG]检测到窗口全部关闭');
        app.quit()
    })
}
function createWindow() {
    win = new BrowserWindow({ width: 1024, height: 768 })
    win.loadFile('src/index.html')
    win.webContents.openDevTools()
    Menu.setApplicationMenu(null)
    win.on('closed', () => {
        win = null
        console.log('[DEBG]检测到窗口关闭');
    })
    // 加载 REACT DEVELOPER TOOLS
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name:any) => console.log(`[DEBG]添加插件：${name}`))
        .catch((err:any) => console.log('[DEBG]添加插件错误：', err))
}