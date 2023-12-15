import fs from "fs";
import { calculateMemoryUsage, printMemoryUsed, retrieveMemory } from "../memory-functions";

const initialMemory: number = retrieveMemory();
console.time("Big File Generator without Streams");

let fileContent: string = "";
const ONE_MILLION: number = 1e6;

for (let i = 0; i <= ONE_MILLION; i++) {
    fileContent += "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
}

fs.writeFileSync("./big-file.txt", fileContent, { encoding: "utf-8" });
console.timeEnd("Big File Generator without Streams");

const finalMemory: number = retrieveMemory();
printMemoryUsed(calculateMemoryUsage(initialMemory, finalMemory));
