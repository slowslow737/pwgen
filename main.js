function genPassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+{}|:<>?-=[]/";

  let passwordLength = 20;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  /* Get txt field */
  var copyText = document.getElementById("password");

  /* Select txt field */
  copyText.select();
  copyText.setSelectionRange(0, 999999); /* For mobile */

  /* Copy txt inside txt field */
  navigator.clipboard.writeText(copyText.value);

  //   /* Alert copied text via tooltip */
  //   alert("Copied the text: " + copyText.value);
}
