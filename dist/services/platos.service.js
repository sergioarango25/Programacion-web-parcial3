"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPlato = exports.actualizarPlato = exports.crearPlato = exports.obtenerPlatoPorId = exports.obtenerPlatos = void 0;
let platos = [
    { id: 1, nombre: "Hamburguesa", precio: 25000, descripcion: "Carne, queso y papas." }
];
const obtenerPlatos = () => platos;
exports.obtenerPlatos = obtenerPlatos;
const obtenerPlatoPorId = (id) => platos.find(p => p.id === id);
exports.obtenerPlatoPorId = obtenerPlatoPorId;
const crearPlato = (data) => {
    platos.push(data);
    return data;
};
exports.crearPlato = crearPlato;
const actualizarPlato = (id, data) => {
    const index = platos.findIndex(p => p.id === id);
    if (index === -1)
        return null;
    platos[index] = { ...platos[index], ...data };
    return platos[index];
};
exports.actualizarPlato = actualizarPlato;
const eliminarPlato = (id) => {
    const index = platos.findIndex(p => p.id === id);
    if (index === -1)
        return false;
    platos.splice(index, 1);
    return true;
};
exports.eliminarPlato = eliminarPlato;
