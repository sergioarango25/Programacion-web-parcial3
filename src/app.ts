import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
// @ts-ignore: module "yamljs" has no types or may not be installed; install @types/yamljs or switch to a typed YAML library
import YAML from "yamljs";
import path from "path";
// @ts-ignore: local route module may be missing or path may be different; ensure ./routes/platos.routes exists or adjust the import
import platosRoutes from "./routes/platos.routes"; // Esto ahora debería ser una función Router válida

const app = express();

app.use(cors());
app.use(express.json());

// Configuración de Swagger
const swaggerDocument = YAML.load(path.join(__dirname, "swagger", "swagger.yaml"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Uso del router de platos. Si platosRoutes es un router válido, esto funciona.
app.use("/api/platos", platosRoutes);

export default app;