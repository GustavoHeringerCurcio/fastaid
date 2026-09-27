const path = require("path");
const express = require("express");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((req, res) => {
  res.status(404).render("404", { titulo: "Página não encontrada - Fast Aid" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render("404", { titulo: "Erro interno - Fast Aid" });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Fast Aid rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;
