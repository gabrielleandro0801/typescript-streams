import fs, { ReadStream, WriteStream } from "node:fs";
import { calculateMemoryUsage, printMemoryUsed, retrieveMemory } from "../memory-functions";

const initialMemory: number = retrieveMemory();
console.time("File Copier with Streams");

const readableStream: ReadStream = fs.createReadStream("./big-file.txt");
const writableStream: WriteStream = fs.createWriteStream("./big-file-copied.txt");

readableStream.pipe(writableStream);
console.timeEnd("File Copier with Streams");

const finalMemory: number = retrieveMemory();
printMemoryUsed(calculateMemoryUsage(initialMemory, finalMemory));
