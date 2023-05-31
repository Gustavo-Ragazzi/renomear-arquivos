import { ipcMain } from "electron";
import fs from "fs";
import path from "path";
import config from "./config.json";

ipcMain.on("filesSelected", (event, urls) => {
    const inputPath = config.inputPath;

    urls.forEach((url: string) => {
        const fileName = path.basename(url);
        const inputFile = path.join(inputPath, fileName);
        console.log(`Copiando ${url}`)

        fs.copyFileSync(url, inputFile);
    })
    console.log("Arquivos copiados")
})