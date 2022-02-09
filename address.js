let street = 'logradouro';
let loc = 'bairro';
let city = 'cidade';


const verifyAddress = (a) => {
  if (a.logradouro) street = a.logradouro;
  if (a.bairro) loc = a.bairro;
  if (a.localidade) city = a.localidade;
}

const searchAddress = () => {

  const zipCode = document.getElementById('zipCode').value;

  if (zipCode.length != 8) {
    alert('Cep inválido - Preencha novamente')
  } else {

    const url = `https://viacep.com.br/ws/${zipCode}/json/`;

    fetch(url).then((response) => {
      return response.json();
    }).then(jsonbody => {
      verifyAddress(jsonbody);
      let fullAddress = `${street}, ${loc}, ${city}`;
      document.getElementById('address').value = fullAddress;
    })
  }

}


document.getElementById('zipCode').addEventListener('focusout', searchAddress);


