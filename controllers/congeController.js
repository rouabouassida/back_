import Conge from "../models/conge.js";
import User from "../models/user.js";

const congeController = {
  createConge: async (req, res) => {
    try {
      const userLoggedIn = await User.findOne({ email: req.body.email });

      if (!userLoggedIn) {
        return res.status(401).json({ error: "Utilisateur non autorisé." });
      }

      const { email: userLoggedInEmail, fullname: userLoggedInFullName } =
        userLoggedIn;

      const { nomPrenom, email, dateDebut, dateFin } = req.body;

      if (userLoggedInEmail !== email || userLoggedInFullName !== nomPrenom) {
        return res.status(400).json({
          error:
            "L'email ou le nom ne correspond pas à l'utilisateur connecté.",
        });
      }

      const conge = new Conge({
        nomPrenom,
        email,
        dateDebut,
        dateFin,
      });

      await conge.save();

      res.status(201).json({ message: "Demande de congé créée avec succès." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la création de la demande de congé." });
    }
  },
};

export default congeController;
