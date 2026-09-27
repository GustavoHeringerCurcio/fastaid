document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const navCadastro = document.getElementById("navCadastro");
  const navLogin = document.getElementById("navLogin");
  const navCadastroMobile = document.getElementById("navCadastroMobile");
  const navLoginMobile = document.getElementById("navLoginMobile");
  const navProfile = document.getElementById("navProfile");
  const navProfileMobile = document.getElementById("navProfileMobile");
  const profilePic = document.getElementById("profilePic");
  const profileEmail = document.getElementById("profileEmail");
  const profilePicMobile = document.getElementById("profilePicMobile");
  const profileEmailMobile = document.getElementById("profileEmailMobile");
  const profileTrigger = document.getElementById("profileTrigger");
  const profileDropdown = document.getElementById("profileDropdown");
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutBtnMobile = document.getElementById("logoutBtnMobile");

  if (!userData || !userData.loggedIn) return;

  navCadastro.classList.add("hidden");
  navLogin.classList.add("hidden");
  if (navCadastroMobile) navCadastroMobile.classList.add("hidden");
  if (navLoginMobile) navLoginMobile.classList.add("hidden");
  navProfile.classList.remove("hidden");
  if (navProfileMobile) navProfileMobile.classList.remove("hidden");

  profilePic.src = userData.profilePicture;
  profileEmail.textContent = userData.email;
  if (profilePicMobile) profilePicMobile.src = userData.profilePicture;
  if (profileEmailMobile) profileEmailMobile.textContent = userData.email;

  profileTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    profileDropdown.classList.add("hidden");
  });

  profileDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.reload();
  });

  if (logoutBtnMobile) {
    logoutBtnMobile.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.reload();
    });
  }
});
