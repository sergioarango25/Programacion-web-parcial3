import { Router, Request, Response } from "express";
import { platos, Plato } from "../data/data";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json(platos);
});

router.get("/:id", (req: Request, res: Response) => {
    const plato = platos.find(p => p.id === Number(req.params.id));
    if (!plato) return res.status(404).json({ error: "Plato no encontrado" });
    res.json(plato);
});

router.post("/", (req: Request, res: Response) => {
    const { nombre, precio, descripcion } = req.body;

    const nuevo: Plato = {
        id: platos.length + 1,
        nombre,
        precio,
        descripcion
    };

    platos.push(nuevo);
    res.status(201).json(nuevo);
});

router.put("/:id", (req: Request, res: Response) => {
    const plato = platos.find(p => p.id === Number(req.params.id));
    if (!plato) return res.status(404).json({ error: "Plato no encontrado" });

    plato.nombre = req.body.nombre ?? plato.nombre;
    plato.precio = req.body.precio ?? plato.precio;
    plato.descripcion = req.body.descripcion ?? plato.descripcion;

    res.json(plato);
});

router.delete("/:id", (req: Request, res: Response) => {
    const index = platos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Plato no encontrado" });

    platos.splice(index, 1);
    res.json({ mensaje: "Plato eliminado" });
});

export default router;
