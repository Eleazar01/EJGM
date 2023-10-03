import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/usuario.interface";

// no necesita las llaves porq la exportaciones se hizo default
import Usuario from "../models/UserModel";

import { encriptar, verificar } from "../utils/bcryptjs.handle";
import { generarToken } from "../utils/jwt.handle";

const registroNuevoUser = async ({email, password, nombre}: User) => {
    const CheckIs = await Usuario.findOne({ email });
    if (CheckIs) return  "El usuario ya existe";
    const passHash = await encriptar(password);
    const registroNuevoUser = await Usuario.create({ email, password: passHash, nombre });
    return registroNuevoUser;
}

const accesoUser = async ({email, password}: Auth) => {
    const CheckIs = await Usuario.findOne({ email });
    if (!CheckIs) return "El usuario no existe";

    const passwordHash = CheckIs.password;
    const esCorrecto = await verificar(password, passwordHash);

    if (!esCorrecto) return "Contraseña incorrecta";

    const token = generarToken(CheckIs.email);
    const data = {
         token, 
         user: CheckIs
        };
    return data;
}

export { registroNuevoUser, accesoUser };

