import { Request, Response } from 'express';
import Admin from '../models/AdminModel';

export const getAdmins = async (req: Request, res: Response) => {
    const listAdmin = await Admin.findAll()

    res.json(listAdmin)
}

export const getAdmin = async (req: Request, res: Response) => {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);

    if (admin) {
        res.json(admin)
    } else {
        res.status(404).json({
            msg: `No existe un admin con el id ${id}`
        })
    }
}

export const deleteAdmin = async (req: Request, res: Response) => {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);

    if (!admin) {
        res.status(404).json({
            msg: `No existe un admin con el id ${id}`
        })
    } else {
        await admin.destroy();
        res.json({
            msg: 'El admin fue eliminado con exito!'
        })
    }
}

export const postAdmin = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Admin.create(body);

        res.json({
            msg: `El admin fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateAdmin = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const admin = await Admin.findByPk(id);

    if(admin) {
        await admin.update(body);
        res.json({
            msg: 'El admin fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un admin con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}