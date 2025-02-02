const { exec } = require("child_process");
const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: __dirname + "/preload.js",
      contextIsolation: true,
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  ipcMain.on("send-space-key", () => {
    console.log("Sending Space key globally...");
    exec("osascript -e 'tell application \"System Events\" to key code 49'"); // 49 = Space key
  });
});
