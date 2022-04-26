// Initially showing the icon
const dialogBoxIcon = document.createElement("div");
dialogBoxIcon.classList.add("dialog-box-icon");
const iconAvatar = document.createElement("div");
iconAvatar.classList.add("icon");
dialogBoxIcon.appendChild(iconAvatar);

const dialogBoxForm = document.querySelector(".dialog-box-form");
// append icon as a previous node of dialogBoxform
dialogBoxForm.parentNode.insertBefore(dialogBoxIcon, dialogBoxForm.nextSibling);

// pop the dialog form when icon is clicked
const dialogIcon = document.querySelector(".dialog-box-icon");
dialogIcon.addEventListener("click", dialogForm);

// handling the dialog form
function dialogForm() {
  // hide the icon
  dialogIcon.style = "display: none";
  // show the form
  dialogBoxForm.style.display = "flex";

  // creating close button to the design
  const closeIcon = document.createElement("input");
  closeIcon.setAttribute("type", "reset");
  closeIcon.setAttribute("id", "close");
  closeIcon.setAttribute("value", "X");
  dialogBoxForm.appendChild(closeIcon);

  // handling close action
  closeIcon.addEventListener("click", () => {
    // show the icon
    dialogIcon.style = "display: grid";
    // hide the form
    dialogBoxForm.style.display = "none";
  });

  // handle form submit
  const submitButton = document.querySelector(
    ".dialog-box-form input[type='submit']"
  );
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".dialog-box-form input").forEach((input) => {
      // console the values
      if (input.type == "submit" || input.type == "reset") return;

      // Only display the user input
      console.log(input.value, "\n");
    });
  });
}
