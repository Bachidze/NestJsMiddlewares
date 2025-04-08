import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UpdateMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next:NextFunction) {
        if(!req.headers["permission"] || req.headers["permission"] !== "update")
            throw new BadRequestException
        next()
    }
}