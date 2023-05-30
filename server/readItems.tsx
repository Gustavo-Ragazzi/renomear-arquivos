const fs = require("fs");
import config from "./config.json";

export function readItemsFromFolder() {
    return new Promise((resolve, reject) => {
        fs.readdir(config.inputPath, (error: NodeJS.ErrnoException | null, items: string[]) => {
            if(error) {
                reject(error);
            } else {
                resolve(items);
                console.log("Enviando items: ", items)
            }
        });
    });
}