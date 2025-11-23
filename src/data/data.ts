export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
}

export interface Plato {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
}

export interface Pedido {
    id: number;
    usuarioId: number;
    platoId: number;
    cantidad: number;
    total: number;
}

export let usuarios: Usuario[] = [
    { id: 1, nombre: "Juan", correo: "juan@example.com" }
];

export let platos: Plato[] = [
    { id: 1, nombre: "Hamburguesa", precio: 25000, descripcion: "Carne, queso y pan" }
];

export let pedidos: Pedido[] = [
    { id: 1, usuarioId: 1, platoId: 1, cantidad: 2, total: 50000}
];
