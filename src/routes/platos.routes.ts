import { Router, Request, Response } from "express";

// Controller handlers implemented inline to avoid a missing external module.
const getPlatos = (req: Request, res: Response) => {
  res.json({ message: "getPlatos" });
};

const getPlatoById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: "getPlatoById", id });
};

const postPlato = (req: Request, res: Response) => {
  const body = req.body;
  res.status(201).json({ message: "postPlato", body });
};

const putPlato = (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.json({ message: "putPlato", id, body });
};

const deletePlato = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(204).send();
};

const router = Router();

router.get("/", getPlatos);
router.get("/:id", getPlatoById);
router.post("/", postPlato);
router.put("/:id", putPlato);
router.delete("/:id", deletePlato);

export default router;
