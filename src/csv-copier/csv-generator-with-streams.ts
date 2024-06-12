import { randomInt } from "node:crypto";
import fs, { WriteStream } from "node:fs";
import { calculateMemoryUsage, printMemoryUsed, retrieveMemory } from "../memory-functions";

const initialMemory: number = retrieveMemory();
console.time("Big CSV File Generator with Streams");

const file: WriteStream = fs.createWriteStream("./big-file.csv");
const ONE_MILLION: number = 1e6;

file.write("a,b,c,d,e,f,g,h,i,j\n");
for (let i = 0; i <= ONE_MILLION; i++) {
    const value: number = randomInt(ONE_MILLION, ONE_MILLION * 999);
    file.write(`${value},${value},${value},${value},${value},${value},${value},${value},${value},${value}\n`);
}

file.end();
console.timeEnd("Big CSV File Generator with Streams");

const finalMemory: number = retrieveMemory();
printMemoryUsed(calculateMemoryUsage(initialMemory, finalMemory));
