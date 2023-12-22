const viewUserProfile = document.querySelector(".view-user-profile");
const profileContainer = document.querySelector(".profile-container");
const editButton = document.querySelector(".edit-button");
const backButton = document.querySelector(".back-btn");
const backUserButton = document.querySelector(".back-btn-user-profile");

editButton.addEventListener("click", () => {
  profileContainer.style.display = "flex";
  viewUserProfile.style.display = "none";
  backUserButton.style.display = "block";
  backButton.style.display = "none";
});

backUserButton.addEventListener("click", () => {
  profileContainer.style.display = "none";
  viewUserProfile.style.display = "flex";
  backUserButton.style.display = "none";
  backButton.style.display = "block";
});
