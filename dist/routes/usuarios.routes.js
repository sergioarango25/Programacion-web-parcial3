"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data/data");
const router = (0, express_1.Router)();
// GET todos
router.get("/", (req, res) => {
    res.json(data_1.usuarios);
});
// GET uno por id
router.get("/:id", (req, res) => {
    const usuario = data_1.usuarios.find(u => u.id === Number(req.params.id));
    if (!usuario)
        return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
});
// POST crear
router.post("/", (req, res) => {
    const { nombre, correo } = req.body;
    const nuevo = {
        id: data_1.usuarios.length + 1,
        nombre,
        correo
    };
    data_1.usuarios.push(nuevo);
    res.status(201).json(nuevo);
});
// PUT actualizar
router.put("/:id", (req, res) => {
    const usuario = data_1.usuarios.find(u => u.id === Number(req.params.id));
    if (!usuario)
        return res.status(404).json({ error: "Usuario no encontrado" });
    usuario.nombre = req.body.nombre ?? usuario.nombre;
    usuario.correo = req.body.correo ?? usuario.correo;
    res.json(usuario);
});
// DELETE eliminar
router.delete("/:id", (req, res) => {
    const index = data_1.usuarios.findIndex(u => u.id === Number(req.params.id));
    if (index === -1)
        return res.status(404).json({ error: "Usuario no encontrado" });
    data_1.usuarios.splice(index, 1);
    res.json({ mensaje: "Usuario eliminado" });
});
exports.default = router;
