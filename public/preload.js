const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendSpaceKey: () => ipcRenderer.send("send-space-key"),
});
