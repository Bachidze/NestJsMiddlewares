import { BadGatewayException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class DeleteMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next:NextFunction) {
        if(!req.headers["permission"] || req.headers["permission"] !== "delete")
            throw new BadGatewayException
        next()
    }
}