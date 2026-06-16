document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("user")) {
    window.location.href = "index.html";
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

    if (email !== "admin@gmail.com" || password !== "admin") {
      errorSpan.textContent = "E-mail ou senha inválidos";
      return;
    }

    let profilePicture = "";

    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) throw new Error("Erro na requisição");
      const data = await response.json();
      profilePicture = data.results[0].picture.large;
    } catch (err) {
      profilePicture = "images/logo.png";
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        profilePicture,
        loggedIn: true,
      })
    );

    window.location.href = "index.html";
  });
});
