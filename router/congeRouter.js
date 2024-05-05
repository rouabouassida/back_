import express from "express";
import congeController from "../controllers/congeController.js";

const congeRouter = express.Router();

// Route pour créer une nouvelle demande de congé
congeRouter.post("/demande-conge", congeController.createConge);

export default congeRouter;
