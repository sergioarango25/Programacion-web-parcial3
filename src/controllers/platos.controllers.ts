import { Request, Response } from "express";
import * as service from "../services/platos.service";

export const getPlatos = (req: Request, res: Response) => {
    res.json(service.obtenerPlatos());
};

export const getPlatoById = (req: Request, res: Response) => {
    const plato = service.obtenerPlatoPorId(Number(req.params.id));
    if (!plato) return res.status(404).json({ message: "Plato no encontrado" });
    res.json(plato);
};

export const postPlato = (req: Request, res: Response) => {
    const nuevo = service.crearPlato(req.body);
    res.status(201).json(nuevo);
};

export const putPlato = (req: Request, res: Response) => {
    const actualizado = service.actualizarPlato(Number(req.params.id), req.body);
    if (!actualizado) return res.status(404).json({ message: "Plato no encontrado" });
    res.json(actualizado);
};

export const deletePlato = (req: Request, res: Response) => {
    const ok = service.eliminarPlato(Number(req.params.id));
    if (!ok) return res.status(404).json({ message: "Plato no encontrado" });
    res.status(204).send();
};
