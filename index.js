let button = document.getElementById("button");

button.addEventListener("click", valideForm);

function valideForm() {
  let name = document.getElementById("name");
  let password = document.getElementById("password");
  let phone = document.getElementById("phone");
  const reg =
    /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/;

  if (name.value.length < 5) {
    alert("your name should have at least 5 characters !");
  }
  if (!reg.test(password.value)) {
    alert("check your pasword");
  }
  if (phone.value.length != 8 || !/^\d+$/.test(phone.value)) {
    alert("you shoudl add a valide phone number conatins 8 digitals");
  }

  console.log("name in the input", name.value);
  console.log("password in the input", password.value);
  console.log("phone in the input", phone.value);
}
