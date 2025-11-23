import { Router } from 'express';
import * as pedidosController from '../controllers/pedidos.controllers';
const {
    getAllPedidos,
    getPedidoById,
    createPedido,
    updatePedido,
    deletePedido
} = pedidosController as any;

const router = Router();

/**
 * Rutas para la gestión de Pedidos (Endpoints 6 al 10)
 *
 * Mapeo de rutas HTTP a métodos del controlador:
 */

// [Endpoint 6] GET /api/pedidos - Obtener todos los pedidos
router.get('/', getAllPedidos);

// [Endpoint 7] GET /api/pedidos/:id - Obtener un pedido por ID
router.get('/:id', getPedidoById);

// [Endpoint 8] POST /api/pedidos - Crear un nuevo pedido
router.post('/', createPedido);

// [Endpoint 9] PUT /api/pedidos/:id - Actualizar un pedido existente
router.put('/:id', updatePedido);

// [Endpoint 10] DELETE /api/pedidos/:id - Eliminar un pedido
router.delete('/:id', deletePedido);

export default router;