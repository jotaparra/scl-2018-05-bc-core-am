window.onload = () => {
  const btn1 = document.getElementById("cipherBtn");

  btn1.addEventListener("click", () => {
  let message = document.getElementById('text').value;
  let offset = document.getElementById('offsetNumber').value;
  let result = window.cipher.encode(offset, message);
  document.getElementById("newText").innerHTML = result;
  }); 

 const btn2 = document.getElementById("decipherBtn");

  btn2.addEventListener("click", () => {
  let message2 = document.getElementById('text').value;
  let offset2 = document.getElementById('offsetNumber').value;
  let resultDecode = window.cipher.decode(offset2, message2);
  document.getElementById("newText").innerHTML = resultDecode;
  }); 
};