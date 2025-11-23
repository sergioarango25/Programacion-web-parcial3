"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlato = exports.putPlato = exports.postPlato = exports.getPlatoById = exports.getPlatos = void 0;
const service = __importStar(require("../services/platos.service"));
const getPlatos = (req, res) => {
    res.json(service.obtenerPlatos());
};
exports.getPlatos = getPlatos;
const getPlatoById = (req, res) => {
    const plato = service.obtenerPlatoPorId(Number(req.params.id));
    if (!plato)
        return res.status(404).json({ message: "Plato no encontrado" });
    res.json(plato);
};
exports.getPlatoById = getPlatoById;
const postPlato = (req, res) => {
    const nuevo = service.crearPlato(req.body);
    res.status(201).json(nuevo);
};
exports.postPlato = postPlato;
const putPlato = (req, res) => {
    const actualizado = service.actualizarPlato(Number(req.params.id), req.body);
    if (!actualizado)
        return res.status(404).json({ message: "Plato no encontrado" });
    res.json(actualizado);
};
exports.putPlato = putPlato;
const deletePlato = (req, res) => {
    const ok = service.eliminarPlato(Number(req.params.id));
    if (!ok)
        return res.status(404).json({ message: "Plato no encontrado" });
    res.status(204).send();
};
exports.deletePlato = deletePlato;
