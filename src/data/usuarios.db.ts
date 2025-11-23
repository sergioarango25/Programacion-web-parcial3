export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

export let usuarios: Usuario[] = [
  { id: 1, nombre: "Sergio", correo: "sergio@mail.com" },
  { id: 2, nombre: "Ana", correo: "ana@mail.com" },
];