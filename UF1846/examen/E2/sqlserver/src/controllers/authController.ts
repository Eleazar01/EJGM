import { Request, Response } from "express";
import { registroNuevoUser, accesoUser } from "../servicios/authService";

const registroCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registroNuevoUser(body);
    res.send(responseUser);
}

const accesoCtrl = async ({body}: Request, res: Response) => {
    const {email, password} = body  
    const responseUser = await accesoUser({email, password});
    res.send(responseUser);

    if (responseUser === "Contraseña incorrecta") {
        res.status(403);
        res.send(responseUser);
    }else{
        res.send(responseUser);
    }
}
export { registroCtrl, accesoCtrl };