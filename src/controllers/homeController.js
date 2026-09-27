const emergenciaModel = require("../models/emergenciasModel");

function index(req, res) {
  res.render("index", {
    titulo: "Fast Aid — Aprenda primeiros socorros",
    emergencias: emergenciaModel.listar(),
  });
}

module.exports = { index };
