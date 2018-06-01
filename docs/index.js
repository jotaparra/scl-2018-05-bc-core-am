window.onload = () => {
  const btn1 = document.getElementById('cipherBtn');
  const btn2 = document.getElementById('decipherBtn');
  const btn3 = document.getElementById('reset');

  btn1.addEventListener('click', () => {
  let message = document.getElementById('text').value;
  let offset = document.getElementById('offsetNumber').value;
  let result = window.cipher.encode(offset, message);
  document.getElementById('newText').innerHTML = result;
  }); 

  btn2.addEventListener('click', () => {
  let message2 = document.getElementById('text').value;
  let offset2 = document.getElementById('offsetNumber').value;
  let resultDecode = window.cipher.decode(offset2, message2);
  document.getElementById('newText').innerHTML = resultDecode;
  }); 
  
  btn3.addEventListener('click', () => {
  document.getElementById('text').value = '';
  document.getElementById('newText').innerHTML = '';
  });
};