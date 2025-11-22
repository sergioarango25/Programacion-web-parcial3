import app from "./app";

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("El avion esta despegando");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});