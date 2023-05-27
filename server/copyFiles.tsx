import { ipcMain } from "electron";
import fs from "fs";
import path from "path";
import config from "./config.json";

ipcMain.on("filesSelected", (event, urls) => {
    const outputPath = config.outputPath;

    urls.forEach((url: string) => {
        const fileName = path.basename(url);
        const outputFile = path.join(outputPath, fileName);
        console.log(`Copiando ${url}`)

        fs.copyFileSync(url, outputFile);
    })
    console.log("Arquivos copiados")
})