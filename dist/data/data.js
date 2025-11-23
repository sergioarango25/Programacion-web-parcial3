"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidos = exports.platos = exports.usuarios = void 0;
exports.usuarios = [
    { id: 1, nombre: "Juan", correo: "juan@example.com" }
];
exports.platos = [
    { id: 1, nombre: "Hamburguesa", precio: 25000, descripcion: "Carne, queso y pan" }
];
exports.pedidos = [
    { id: 1, usuarioId: 1, platoId: 1, cantidad: 2, total: 50000 }
];
