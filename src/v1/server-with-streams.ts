import express, { Express, NextFunction, Request, Response } from "express";
import fs, { ReadStream } from "fs";

const server: Express = express();

server.get("/file", (request: Request, response: Response, nextFunction: NextFunction) => {
    const stream: ReadStream = fs.createReadStream("./big-file.txt");

    stream.pipe(response);
    console.log("Chunk read");
});

const port: number = 5001;
server.listen(port, (): void => {
    console.log("App running on http://localhost:5001");
});
