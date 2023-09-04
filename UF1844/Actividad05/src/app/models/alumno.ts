// External dependencies

// Class Implementation

import { ObjectId } from "mongodb";

export class usuarios {
  constructor(
    public nombre: string,
    public apellidos: string,
    public edad: number, 
    public email: string,
    public telefono: string, 
    public password: string,
    public matriculado: boolean,
    public profesor: boolean,
    public avatar: string,
    public id?: ObjectId
    ) {}
}