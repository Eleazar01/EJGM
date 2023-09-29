import { Request, Response } from 'express';
import Tareas from '../models/TareasModel';

export const getTareas = async (req: Request, res: Response) => {
    const listTarea = await Tareas.findAll()

    res.json(listTarea)
}

export const getTarea = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tarea = await Tareas.findByPk(id);

    if (tarea) {
        res.json(tarea)
    } else {
        res.status(404).json({
            msg: `No existe una tarea con el id ${id}`
        })
    }
}

export const deleteTarea = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tarea = await Tareas.findByPk(id);

    if (!tarea) {
        res.status(404).json({
            msg: `No existe un tarea con el id ${id}`
        })
    } else {
        await tarea.destroy();
        res.json({
            msg: 'El tarea fue eliminado con exito!'
        })
    }
}

export const postTarea = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Tareas.create(body);

        res.json({
            msg: `El tarea fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateTarea = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const tarea = await Tareas.findByPk(id);

    if(tarea) {
        await tarea.update(body);
        res.json({
            msg: 'El tarea fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un tarea con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}