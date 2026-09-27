const express = require("express");
const homeController = require("../controllers/homeController");
const emergenciaController = require("../controllers/emergenciaController");
const authController = require("../controllers/authController");

const router = express.Router();

const mostrarEmergencia = (slug) => (req, res, next) => {
  req.params.slug = slug;
  return emergenciaController.mostrar(req, res, next);
};

router.get("/", homeController.index);

router.get("/rcp", mostrarEmergencia("rcp"));
router.get("/convulsao", mostrarEmergencia("convulsao"));

router.get("/login", authController.paginaLogin);
router.post("/login", authController.login);

router.get("/cadastro", authController.paginaCadastro);
router.post("/cadastro", authController.cadastrar);

module.exports = router;
