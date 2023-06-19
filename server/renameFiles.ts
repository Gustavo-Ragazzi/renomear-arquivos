import { ipcMain } from "electron";
import config from "./config.json";
import fs from "fs";

ipcMain.on("newNamesList", (event, names) => {
    const oldList = fs.readdirSync(config.inputPath);

    names.forEach((name: string, index: number) => {
        const oldFilePath = `${config.inputPath}/${oldList[index]}`;
        const newFilePath = `${config.outputPath}/${name}`;

        fs.rename(oldFilePath, newFilePath, (error) => {
            if(error) {
                console.error(`Erro ao renomear o arquivo ${name}: `, error);
            } else {
                console.log(`Arquivo ${index} renomeado com sucesso!`);
            }
        })
    })
})