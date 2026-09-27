document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("user")) {
    window.location.href = "/";
    return;
  }

  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorSpan = document.getElementById("loginError");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorSpan.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let resultado;
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });
      resultado = await response.json();
    } catch (err) {
      errorSpan.textContent = "Não foi possível conectar ao servidor";
      return;
    }

    if (!resultado.ok) {
      errorSpan.textContent = resultado.mensagem || "E-mail ou senha inválidos";
      return;
    }

    let profilePicture = "";

    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) throw new Error("Erro na requisição");
      const data = await response.json();
      profilePicture = data.results[0].picture.large;
    } catch (err) {
      profilePicture = "/images/logo.png";
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: resultado.usuario.email,
        nome: resultado.usuario.nome,
        profilePicture,
        loggedIn: true,
      })
    );

    window.location.href = "/";
  });
});
