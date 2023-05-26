import { ipcMain } from "electron";

ipcMain.on("filesSelected", (event, urls) => {
    console.log(urls)
})
