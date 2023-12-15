export function retrieveMemory(): number {
    return process.memoryUsage().heapUsed / 1024 / 1024;
}

export function calculateMemoryUsage(initial: number, final: number) {
    return final - initial;
}

export function printMemoryUsed(memoryUsed: number): void {
    console.log(`Memory used: ${Math.round(memoryUsed * 100) / 100} MB`);
}
