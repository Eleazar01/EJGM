import { Request, Response } from 'express';
import {User} from '../models/UserModel';

export const getUsers = async (req: Request, res: Response) => {
    const listUsers = await User.findAll()
    res.json(listUsers)
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);
    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe un usuariocon el id ${id}`
        })
    } else {
        await usuario.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito!'
        })
    }
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await User.create(body);
        res.json({
            msg: `El usuario fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const usuario = await User.findByPk(id);
    if(usuario) {
        await usuario.update(body);
        res.json({
            msg: 'El usuario fue actualziado con exito'
        })
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }    
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }   
}