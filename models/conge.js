import mongoose from "mongoose";

// Définition du schéma pour les demandes de congé
const congeSchema = new mongoose.Schema({
  nomPrenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateDebut: {
    type: String,
    required: true,
  },
  dateFin: {
    type: String,
    required: true,
  },
});

// Création du modèle pour les demandes de congé
const Conge = mongoose.model("Conge", congeSchema);

export default Conge;
