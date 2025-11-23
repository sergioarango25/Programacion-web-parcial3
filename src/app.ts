import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

import platosRoutes from "./routes/platos.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import pedidosRoutes from "./routes/pedidos.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Swagger
const swaggerDocument = YAML.load(path.join(__dirname, "swagger", "swagger.yaml"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use("/api/platos", platosRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/pedidos", pedidosRoutes);

export default app;
