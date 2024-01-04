import fs, { ReadStream, WriteStream } from "node:fs";
import csv from "csv-parser";
import { calculateMemoryUsage, printMemoryUsed, retrieveMemory } from "../memory-functions";

async function read() {
    const content = [];
    const readableStream: ReadStream = fs.createReadStream("./big-file.csv");

    return new Promise((resolve, reject) => {
        readableStream
            .pipe(csv())
            .on("data", (chunk) => {
                content.push(chunk);
            })
            .on("end", () => {
                resolve(content);
            });
    })
}

(async () => {
    const initialMemory: number = retrieveMemory();
    console.time("Big CSV File Copier into JSON with Streams");

    const content = await read();
    const writableStream: WriteStream = fs.createWriteStream("./big-file-copied.json");

    writableStream.write(JSON.stringify(content));
    console.timeEnd("Big CSV File Copier into JSON with Streams");

    const finalMemory: number = retrieveMemory();
    printMemoryUsed(calculateMemoryUsage(initialMemory, finalMemory));
})();
