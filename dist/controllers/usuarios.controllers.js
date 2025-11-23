"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
class UsuarioModel {
    constructor(id, nombre, email, rol = 'cliente') {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }
}
exports.UsuarioModel = UsuarioModel;
