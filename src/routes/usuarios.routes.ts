import { Router, Request, Response } from "express";
import { usuarios, Usuario } from "../data/data";

const router = Router();

// GET todos
router.get("/", (req: Request, res: Response) => {
    res.json(usuarios);
});

// GET uno por id
router.get("/:id", (req: Request, res: Response) => {
    const usuario = usuarios.find(u => u.id === Number(req.params.id));
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
});

// POST crear
router.post("/", (req: Request, res: Response) => {
    const { nombre, correo } = req.body;

    const nuevo: Usuario = {
        id: usuarios.length + 1,
        nombre,
        correo
    };

    usuarios.push(nuevo);
    res.status(201).json(nuevo);
});

// PUT actualizar
router.put("/:id", (req: Request, res: Response) => {
    const usuario = usuarios.find(u => u.id === Number(req.params.id));
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    usuario.nombre = req.body.nombre ?? usuario.nombre;
    usuario.correo = req.body.correo ?? usuario.correo;

    res.json(usuario);
});

// DELETE eliminar
router.delete("/:id", (req: Request, res: Response) => {
    const index = usuarios.findIndex(u => u.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Usuario no encontrado" });

    usuarios.splice(index, 1);
    res.json({ mensaje: "Usuario eliminado" });
});

export default router;
