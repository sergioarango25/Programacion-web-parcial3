export interface Usuario {
    id: string;
    nombre: string;
    email: string;
    rol: 'administrador' | 'mesero' | 'cliente';
}
export class UsuarioModel implements Usuario {
    constructor(
        public id: string,
        public nombre: string,
        public email: string,
        public rol: 'administrador' | 'mesero' | 'cliente' = 'cliente'
    ) {}
}