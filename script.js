var nome = prompt('qual è il tuo nome?');
console.log(nome);

var cognome = prompt('qual è il tuo cognome?')
console.log(cognome);

var colorePreferito = prompt('qual è il tuo colore preferito?')
console.log(colorePreferito);

var eta = parseInt('24');

var nomeCognomeColoreEta = nome + cognome + colorePreferito + eta;
document.getElementById('risultato').innerHTML = nomeCognomeColoreEta;

