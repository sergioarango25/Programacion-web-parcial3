"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModel = void 0;
/**
 * Clase de ejemplo para crear un nuevo pedido (opcional)
 */
class PedidoModel {
    constructor(id, mesa, items, clienteId) {
        this.id = id;
        this.mesa = mesa;
        this.items = items;
        this.clienteId = clienteId;
        this.fecha = new Date();
        this.estado = 'pendiente';
        // Inicializa el total; se recalculará en el servicio
        this.total = items.reduce((sum, item) => sum + (item.cantidad * item.precioUnitario), 0);
    }
}
exports.PedidoModel = PedidoModel;
