const convertCurrency = () => {
  let currency = null;
  let value = document.getElementById('budget').value;
  let convert = null;
  let result = document.getElementById('result');
  let printCurrency = null;

  if (document.getElementById('dolar').checked) {
    printCurrency = 'reais'
    currency = 'USD-BRL';
  } else {
    printCurrency = 'dólar'
    currency = 'BRL-USD';
  }
  
  fetch(`https://economia.awesomeapi.com.br/${currency}/1?format=json`).then((response) => {
    return response.json();
  }).then(jsonbody => {
    convert = jsonbody[0].low;
    convert *= value;
    result.innerHTML = `Sua proposta em ${printCurrency}: <br> ${convert.toFixed(2)}`
  })
}


document.getElementById('budget').addEventListener('focusout', convertCurrency);





