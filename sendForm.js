const msgOk = () => {
  const msg = document.getElementById('msg').value;
  const name = document.getElementById('name').value;
  const dolar = document.getElementById('dolar').checked;
  const real = document.getElementById('real').checked;
  const comp = document.getElementById('comp').value;

  if(!name){
    alert('PREENCHA: Nome.')
  }
  if(!msg){
    alert('PREENCHA: Mensagem.')
  }
  if(!comp){
    alert('PREENCHA: Complemento.')
  }
  if(!(dolar||real)){
    alert('Selecione uma moeda: Dólar ou Real.')
  }
  
}

document.getElementById('send').addEventListener('click', msgOk);