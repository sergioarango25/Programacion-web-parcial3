"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json(data_1.platos);
});
router.get("/:id", (req, res) => {
    const plato = data_1.platos.find(p => p.id === Number(req.params.id));
    if (!plato)
        return res.status(404).json({ error: "Plato no encontrado" });
    res.json(plato);
});
router.post("/", (req, res) => {
    const { nombre, precio, descripcion } = req.body;
    const nuevo = {
        id: data_1.platos.length + 1,
        nombre,
        precio,
        descripcion
    };
    data_1.platos.push(nuevo);
    res.status(201).json(nuevo);
});
router.put("/:id", (req, res) => {
    const plato = data_1.platos.find(p => p.id === Number(req.params.id));
    if (!plato)
        return res.status(404).json({ error: "Plato no encontrado" });
    plato.nombre = req.body.nombre ?? plato.nombre;
    plato.precio = req.body.precio ?? plato.precio;
    plato.descripcion = req.body.descripcion ?? plato.descripcion;
    res.json(plato);
});
router.delete("/:id", (req, res) => {
    const index = data_1.platos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1)
        return res.status(404).json({ error: "Plato no encontrado" });
    data_1.platos.splice(index, 1);
    res.json({ mensaje: "Plato eliminado" });
});
exports.default = router;
