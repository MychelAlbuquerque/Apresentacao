const convertCurrency = () => {
  let currency = null;
  let value = document.getElementById('budget').value;
  let convert = null;
  let result = document.getElementById('result');
  let printCurrency = null;

  if (document.getElementById('flexSwitchCheckDefault').checked) {
    printCurrency = 'dólar'
    currency = 'BRL-USD';
  } else {
    printCurrency = 'real';
    currency = 'USD-BRL';
  }
  
  fetch(`https://economia.awesomeapi.com.br/${currency}/1?format=json`).then((response) => {
    return response.json();
  }).then(jsonbody => {
    convert = jsonbody[0].low;
    convert *= value;
    result.innerHTML = `Convertendo para ${printCurrency}: <br> ${convert.toFixed(2)}`
  })
}


document.getElementById('budget').addEventListener('input', convertCurrency);

document.getElementById('flexSwitchCheckDefault').addEventListener('click', convertCurrency);





