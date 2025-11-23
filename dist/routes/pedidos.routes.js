"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");
const router = (0, express_1.Router)();
/* ============================
   GET – Obtener todos los pedidos
   ============================ */
router.get("/", (req, res) => {
    res.json(data_1.pedidos);
});
/* ============================
   GET – Obtener un pedido por ID
   ============================ */
router.get("/:id", (req, res) => {
    const pedido = data_1.pedidos.find(p => p.id === Number(req.params.id));
    if (!pedido)
        return res.status(404).json({ error: "Pedido no encontrado" });
    res.json(pedido);
});
/* ============================
   POST – Crear un pedido
   ============================ */
router.post("/", (req, res) => {
    const { usuarioId, platoId, cantidad } = req.body;
    // Validaciones
    if (!usuarioId || !platoId || !cantidad)
        return res.status(400).json({ error: "Faltan datos: usuarioId, platoId, cantidad" });
    if (cantidad <= 0)
        return res.status(400).json({ error: "La cantidad debe ser mayor a 0" });
    if (!data_1.usuarios.some(u => u.id === usuarioId))
        return res.status(400).json({ error: "El usuario no existe" });
    const plato = data_1.platos.find(p => p.id === platoId);
    if (!plato)
        return res.status(400).json({ error: "El plato no existe" });
    // Calcular total
    const total = plato.precio * cantidad;
    const nuevo = {
        id: data_1.pedidos.length + 1,
        usuarioId,
        platoId,
        cantidad,
        total
    };
    data_1.pedidos.push(nuevo);
    res.status(201).json(nuevo);
});
/* ============================
   PUT – Actualizar un pedido
   ============================ */
router.put("/:id", (req, res) => {
    const pedido = data_1.pedidos.find(p => p.id === Number(req.params.id));
    if (!pedido)
        return res.status(404).json({ error: "Pedido no encontrado" });
    const { usuarioId, platoId, cantidad } = req.body;
    // Validaciones opcionales si vienen en el body
    if (usuarioId && !data_1.usuarios.some(u => u.id === usuarioId))
        return res.status(400).json({ error: "El usuario no existe" });
    if (platoId && !data_1.platos.some(p => p.id === platoId))
        return res.status(400).json({ error: "El plato no existe" });
    if (cantidad !== undefined && cantidad <= 0)
        return res.status(400).json({ error: "La cantidad debe ser mayor a 0" });
    // Actualizar
    pedido.usuarioId = usuarioId ?? pedido.usuarioId;
    pedido.platoId = platoId ?? pedido.platoId;
    pedido.cantidad = cantidad ?? pedido.cantidad;
    // Recalcular total
    const plato = data_1.platos.find(p => p.id === pedido.platoId);
    pedido.total = plato ? plato.precio * pedido.cantidad : pedido.total;
    res.json(pedido);
});
/* ============================
   DELETE – Eliminar un pedido
   ============================ */
router.delete("/:id", (req, res) => {
    const index = data_1.pedidos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1)
        return res.status(404).json({ error: "Pedido no encontrado" });
    data_1.pedidos.splice(index, 1);
    res.json({ mensaje: "Pedido eliminado" });
});
exports.default = router;
