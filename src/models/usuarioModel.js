const usuarios = [
  { nome: "Administrador", email: "admin@gmail.com", telefone: "", senha: "admin" },
];

function validar({ nome, email, telefone, senha, confirmarSenha }) {
  const erros = {};

  const nomeLimpo = (nome || "").trim();
  if (nomeLimpo.length < 3) {
    erros.nome = "O nome precisa ter pelo menos 3 caracteres";
  } else if (!/^[A-Za-zÀ-ÿ ]+$/.test(nomeLimpo)) {
    erros.nome = "O nome deve conter apenas letras";
  }

  if (!(email || "").includes("@")) {
    erros.email = "Digite um e-mail válido";
  }

  if ((telefone || "").replace(/\D/g, "").length < 10) {
    erros.telefone = "Telefone inválido";
  }

  if ((senha || "").length < 6) {
    erros.senha = "Senha deve ter no mínimo 6 caracteres";
  }

  if (confirmarSenha === "" || confirmarSenha === undefined) {
    erros.confirmarSenha = "Confirme sua senha";
  } else if (confirmarSenha !== senha) {
    erros.confirmarSenha = "As senhas não coincidem";
  }

  return erros;
}

function criar(dados) {
  const erros = validar(dados);
  if (Object.keys(erros).length > 0) {
    return { ok: false, erros };
  }

  const email = dados.email.trim().toLowerCase();
  if (usuarios.some((u) => u.email === email)) {
    return { ok: false, erros: { email: "Este e-mail já está cadastrado" } };
  }

  const usuario = {
    nome: dados.nome.trim(),
    email,
    telefone: dados.telefone.replace(/\D/g, ""),
    senha: dados.senha,
  };
  usuarios.push(usuario);
  return { ok: true, usuario: { nome: usuario.nome, email: usuario.email } };
}

function autenticar(email, senha) {
  const normalizado = (email || "").trim().toLowerCase();
  const usuario = usuarios.find((u) => u.email === normalizado && u.senha === senha);
  if (!usuario) {
    return { ok: false, mensagem: "E-mail ou senha inválidos" };
  }
  return { ok: true, usuario: { nome: usuario.nome, email: usuario.email } };
}

module.exports = { criar, autenticar, validar };
