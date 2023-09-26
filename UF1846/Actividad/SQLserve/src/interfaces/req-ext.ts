import { Request, Response } from 'express';

export interface ReqExt extends Request {
    user?: {id: string};
}

export interface ResExt extends Response {
    sendError?: (err: any) => void;
}
