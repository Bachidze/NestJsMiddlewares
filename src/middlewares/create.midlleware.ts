import { BadGatewayException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class CreateMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next:NextFunction) {
        if(!req.headers["permission"] || req.headers["permission"] !== "create")
            throw new BadGatewayException
        next()
    }
}