import fs from "node:fs";
import { calculateMemoryUsage, printMemoryUsed, retrieveMemory } from "../memory-functions";

const initialMemory: number = retrieveMemory();
console.time("File Copier without Streams");

const file: string = fs.readFileSync("./big-file.txt", { encoding: "utf-8" });
fs.writeFileSync("./big-file-copied.txt", file, { encoding: "utf-8" });
console.timeEnd("File Copier without Streams");

const finalMemory: number = retrieveMemory();
printMemoryUsed(calculateMemoryUsage(initialMemory, finalMemory));
