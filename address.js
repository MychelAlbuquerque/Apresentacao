let street = null;
let loc = null;
let city = null;
let box = document.getElementById('box-address');

const verifyAddress = (a) => {
  
  a.logradouro ? street = a.logradouro : street = null; 
  a.bairro ? loc = a.bairro: loc = null;
  a.localidade? city = a.localidade: city =null;
}

const searchAddress = () => {

  const zipCode = document.getElementById('zipCode').value;

  if (zipCode.length != 8) {
    alert('Cep inválido - Preencha novamente, apenas números. Exemplo: 123456000')
  } else {

    fetch(`https://viacep.com.br/ws/${zipCode}/json/`).then((response) => {
      return response.json();
    }).then(jsonbody => {
      verifyAddress(jsonbody);
      box.innerHTML = `Endereço: <br> ${street ? street + ', ' : ''} ${loc ? loc + ', ' : ''}${city ? city + '.' : '.'}`



    })
  }

}


document.getElementById('zipCode').addEventListener('focusout', searchAddress);


