const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//initialize app
app.on('ready', () => {

  //create browser window
  window = new BrowserWindow({width: 800, height: 800});

  //load index.html
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
});

//quit application when window is closed
app.on('window-all-closed', () => {
  app.quit();
})
