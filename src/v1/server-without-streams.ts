import express, { Express, NextFunction, Request, Response } from "express";
import fs from "fs";

const server: Express = express();

server.get("/file", (request: Request, response: Response, nextFunction: NextFunction) => {
    fs.readFile("./big-file", (err, data: Buffer) => {
        if (err) {
            throw err;
        }

        response.end(data);
        console.log("File read");
    });
});

const port: number = 5000;
server.listen(port, (): void => {
    console.log("App running on http://localhost:5000");
});
