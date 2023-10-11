"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userrouter = (0, express_1.Router)();
userrouter.get('/usuarios/', UserController_1.getUsuarios);
userrouter.get('/usuarios/:id', UserController_1.getUsuario);
userrouter.delete('/usuarios/:id', UserController_1.deleteUsuario);
userrouter.post('/usuarios/', UserController_1.postUsuario);
userrouter.put('/usuarios/:id', UserController_1.updateUsuario);
exports.default = userrouter;
