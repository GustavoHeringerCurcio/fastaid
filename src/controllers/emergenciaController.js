const emergenciaModel = require("../models/emergenciasModel");

function mostrar(req, res, next) {
  const conteudo = emergenciaModel.obterPorSlug(req.params.slug);
  if (!conteudo) {
    return next();
  }

  res.render("emergencia", {
    titulo: `${conteudo.titulo} - Fast Aid`,
    conteudo,
  });
}

module.exports = { mostrar };
