import { HttpException, HttpStatus, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class AccessMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next:NextFunction) {
    if(req.headers["user-agent"]?.includes("Postman")){
        next()
    }else{
        throw new HttpException("request must be from Postman",HttpStatus.BAD_REQUEST)
    }
}
}