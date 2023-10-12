"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CursoController_1 = require("../controllers/CursoController");
const routercurso = (0, express_1.Router)();
routercurso.get('/', CursoController_1.getCursos);
routercurso.get('/:id', CursoController_1.getCurso);
routercurso.delete('/:id', CursoController_1.deleteCurso);
routercurso.post('/', CursoController_1.postCurso);
routercurso.put('/:id', CursoController_1.updateCurso);
exports.default = routercurso;
