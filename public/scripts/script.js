const form = document.querySelector("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

const campos = { nome, email, telefone, senha, confirmarSenha };

function setErro(input, mensagem) {
  const span = input.parentElement.querySelector(".erro");
  if (span) span.textContent = mensagem;
  input.classList.add("border-[#ff4d4d]", "shadow-[0_0_0_2px_rgba(255,77,77,0.2)]");
}

function limparErro(input) {
  const span = input.parentElement.querySelector(".erro");
  if (span) span.textContent = "";
  input.classList.remove("border-[#ff4d4d]", "shadow-[0_0_0_2px_rgba(255,77,77,0.2)]");
}

function limparTodos() {
  Object.values(campos).forEach(limparErro);
}

function validar() {
  let valido = true;

  if (nome.value.trim().length < 3) {
    setErro(nome, "O nome precisa ter pelo menos 3 caracteres");
    valido = false;
  } else if (!/^[A-Za-zÀ-ÿ ]+$/.test(nome.value)) {
    setErro(nome, "O nome deve conter apenas letras");
    valido = false;
  }

  if (!email.value.includes("@")) {
    setErro(email, "Digite um e-mail válido");
    valido = false;
  }

  if (telefone.value.replace(/\D/g, "").length < 10) {
    setErro(telefone, "Telefone inválido");
    valido = false;
  }

  if (senha.value.length < 6) {
    setErro(senha, "Senha deve ter no mínimo 6 caracteres");
    valido = false;
  }

  if (confirmarSenha.value === "") {
    setErro(confirmarSenha, "Confirme sua senha");
    valido = false;
  } else if (confirmarSenha.value !== senha.value) {
    setErro(confirmarSenha, "As senhas não coincidem");
    valido = false;
  }

  return valido;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  limparTodos();

  if (!validar()) return;

  let resultado;
  try {
    const response = await fetch("/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        senha: senha.value,
        confirmarSenha: confirmarSenha.value,
      }),
    });
    resultado = await response.json();
  } catch (err) {
    alert("Não foi possível conectar ao servidor");
    return;
  }

  if (!resultado.ok) {
    Object.entries(resultado.erros || {}).forEach(([campo, mensagem]) => {
      if (campos[campo]) setErro(campos[campo], mensagem);
    });
    return;
  }

  alert("Cadastro realizado com sucesso!");
  window.location.href = "/login";
});

telefone.addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\D/g, "");

  valor =
    valor.length <= 10
      ? valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
      : valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");

  e.target.value = valor;
});
