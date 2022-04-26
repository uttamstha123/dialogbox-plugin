const dialogBox = document.querySelector(".dialog-box-icon");
const dialogBoxForm = document.querySelector(".dialog-box-form");

// pop the dialog form when icon is clicked
dialogBox.addEventListener("click", dialogForm);

// function defined
function dialogForm() {
  // hide the icon
  dialogBox.style = "display: none";
  // show the form
  dialogBoxForm.style.display = "flex";

  // handle form submit
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    // console the values
    let consoleLog = `First Name: ${firstName} \nLast Name: ${lastName}\nEmail: ${email}`;
    console.log(consoleLog);
  });
}
