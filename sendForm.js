const msgOk = () => {
  const msg = document.getElementById('msg').value;
  const name = document.getElementById('name').value;
  const zipCode = document.getElementById('zipCode').value;
  const address = document.getElementById('address').value;
  
  if (msg && name && zipCode && address) {
    alert('Proposta enviada. Muito Obrigado!');
  }else{
    alert('Preencha todos os campos.');
  }
}

document.getElementById('send').addEventListener('click', msgOk);