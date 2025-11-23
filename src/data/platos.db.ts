export interface Plato {
  id: number;
  nombre: string;
  precio: number;
}

export let platos: Plato[] = [
  { id: 1, nombre: "Pizza", precio: 25000 },
  { id: 2, nombre: "Hamburguesa", precio: 15000 },
];
