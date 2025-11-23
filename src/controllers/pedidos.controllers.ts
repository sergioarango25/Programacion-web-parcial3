// Estructura de un ítem de detalle dentro de un pedido
export interface PedidoItem {
    platoId: string;
    nombrePlato: string;
    cantidad: number;
    precioUnitario: number;
}


export interface Pedido {
    id: string;
    fecha: Date;
    mesa: number;
    clienteId?: string; // Opcional, si el pedido está asociado a un usuario registrado
    items: PedidoItem[];
    estado: 'pendiente' | 'en_preparacion' | 'listo' | 'entregado' | 'cancelado';
    total: number; // El total se debe calcular en el servicio
}

/**
 * Clase de ejemplo para crear un nuevo pedido (opcional)
 */
export class PedidoModel implements Pedido {
    fecha: Date;
    estado: 'pendiente' | 'en_preparacion' | 'listo' | 'entregado' | 'cancelado';
    total: number;

    constructor(
        public id: string,
        public mesa: number,
        public items: PedidoItem[],
        public clienteId?: string
    ) {
        this.fecha = new Date();
        this.estado = 'pendiente';
        // Inicializa el total; se recalculará en el servicio
        this.total = items.reduce((sum, item) => sum + (item.cantidad * item.precioUnitario), 0);
    }
}