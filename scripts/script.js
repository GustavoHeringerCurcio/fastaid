const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");


function setErro(input, mensagem) {
  const span = input.parentElement.querySelector(".erro");
  span.textContent = mensagem;
  input.classList.add("input-erro");
}

function limparErro(input) {
  const span = input.parentElement.querySelector(".erro");
  span.textContent = "";
  input.classList.remove("input-erro");
}


form.addEventListener("submit", e => {
  e.preventDefault();

  let valido = true;


if (nome.value.trim().length < 3) {
  setErro(nome, "O nome precisa ter pelo menos 3 caracteres");
  valido = false;
} else if (!/^[A-Za-zÀ-ÿ ]+$/.test(nome.value)) {
  setErro(nome, "O nome deve conter apenas letras");
  valido = false;
} else {
  limparErro(nome);
}

  if (!email.value.includes("@")) {
    setErro(email, "Digite um e-mail válido");
    valido = false;
  } else {
    limparErro(email);
  }

  if (telefone.value.replace(/\D/g, "").length < 10) {
    setErro(telefone, "Telefone inválido");
    valido = false;
  } else {
    limparErro(telefone);
  }

  if (senha.value.length < 6) {
    setErro(senha, "Senha deve ter no mínimo 6 caracteres");
    valido = false;
  } else {
    limparErro(senha);
  }

if (confirmarSenha.value === "") {
  setErro(confirmarSenha, "Confirme sua senha");
  valido = false;

} else if (confirmarSenha.value !== senha.value) {
  setErro(confirmarSenha, "As senhas não coincidem");
  valido = false;

} else {
  limparErro(confirmarSenha);
}

  if (valido) {
    alert("Cadastro realizado com sucesso!");
  }
});

telefone.addEventListener("input", e => {
  let valor = e.target.value.replace(/\D/g, "");

    valor = valor.length <= 10 ? 
      valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3") :
      valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");

    e.target.value = valor;
});