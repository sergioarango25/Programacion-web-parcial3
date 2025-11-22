import { Plato } from "../models/plato.model";

let platos: Plato[] = [
    { id: 1, nombre: "Hamburguesa", precio: 25000, descripcion: "Carne, queso y papas." }
];

export const obtenerPlatos = () => platos;

export const obtenerPlatoPorId = (id: number) =>
    platos.find(p => p.id === id);

export const crearPlato = (data: Plato) => {
    platos.push(data);
    return data;
};

export const actualizarPlato = (id: number, data: Partial<Plato>) => {
    const index = platos.findIndex(p => p.id === id);
    if (index === -1) return null;

    platos[index] = { ...platos[index], ...data };
    return platos[index];
};

export const eliminarPlato = (id: number) => {
    const index = platos.findIndex(p => p.id === id);
    if (index === -1) return false;

    platos.splice(index, 1);
    return true;
};
