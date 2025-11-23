import app from "./app";

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("El servidor está funcionando correctamente.");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});
