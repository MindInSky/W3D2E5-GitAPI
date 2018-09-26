const searchUser = document.getElementById("searchUser");

const ui = new UI();
const gitHub = new GitHub();

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText != "") {
    //make http call to gitAPI
    console.log(userText);

    gitHub.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        console.log(data.repos);
      }
    });
  } else {
    //Clear user profile
    ui.clearprofile();
  }
});
