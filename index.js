// call the button from the dom
let button = document.getElementById("button");
// when click on the button , we should call the valideForm function
button.addEventListener("click", valideForm);

function valideForm() {
  // Call the Dom objects ( input tags)
  let name = document.getElementById("name");
  let password = document.getElementById("password");
  let phone = document.getElementById("phone");
  // set the regx patterns for the validation
  const reg =
    /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/;

  // conditions validation
  if (name.value.length < 5) {
    alert("your name should have at least 5 characters !");
    return false;
  }
  if (!reg.test(password.value)) {
    alert("check your pasword");
    return false;
  }
  // validate the length and value type that should be a number
  if (phone.value.length != 8 || !/^\d+$/.test(phone.value)) {
    alert("you shoudl add a valide phone number conatins 8 digitals");
    return false;
  }

  // show the value result if valide
  console.log("name in the input", name.value);
  console.log("password in the input", password.value);
  console.log("phone in the input", phone.value);
}
