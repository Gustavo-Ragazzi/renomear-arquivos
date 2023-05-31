const fs = require("fs");
import { ipcMain } from "electron";
import config from "./config.json";

ipcMain.on("deleteFile", (event, file) => {
    const inputPath = config.inputPath;
    const url = `${inputPath}/${file}`
    
    fs.unlink(url, (error: string | null) => {
        if(error) {
            console.error(`Erro ao apagar o arquivo ${file}: ${error}`);
        } else {
            console.log(`Arquivo ${file} apagado com sucesso`)
        }
    })
})