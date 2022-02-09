const msgOk = () => {
  const msg = document.getElementById('msg').value;
  const name = document.getElementById('name').value;
  const zipCode = document.getElementById('zipCode').value;
  const address = document.getElementById('address').value;
  const dolar = document.getElementById('dolar').checked;
  const real = document.getElementById('real').checked;
  
  if (msg && name && zipCode && address && (dolar||real) ) {
    alert('Proposta enviada. Muito Obrigado!');
  }else{
    alert('------ P R E E N C H A   T O D O S   O S   C A M P O S ------');
  }
}

document.getElementById('send').addEventListener('click', msgOk);