import { ipcMain } from "electron";
import fs from "fs";
import path from "path";

ipcMain.on("filesSelected", (event, urls) => {
    const outputPath = "D:/Conquiste sua Vaga/Projetos/renomear-arquivos/output";

    urls.forEach((url: string) => {
        const fileName = path.basename(url);
        const outputFile = path.join(outputPath, fileName);

        fs.copyFileSync(url, outputFile);
    })
    console.log("Arquivos copiados")
})