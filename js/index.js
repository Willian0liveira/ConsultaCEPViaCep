

let cepString = document.getElementById('inputText').value;
let localidade = 'Não foi possível obter dados sobre a cidade';
let estado = 'Não foi possível obter dados sobre o estado';
let logradouro = 'Não foi possível obter dados sobre o logradouro';
let bairro = 'Não foi possível obter dados sobre o bairro';
let regiao = 'Não foi possível obter dados sobre a região';

function btnConsultar(){
cepString = document.getElementById('inputText').value;
console.log(cepString);
requestHttp();
}


async function requestHttp(){

try {

if(!cepString){
document.getElementById('cidade').innerHTML = localidade;
document.getElementById('estado').innerHTML = estado;
document.getElementById('logradouro').innerHTML = logradouro;
document.getElementById('bairro').innerHTML = bairro;
document.getElementById('regiao').innerHTML = regiao;
}else{

const request = await fetch('https://viacep.com.br/ws/'+cepString+'/json/');
const toJson = await request.json();
document.getElementById('cidade').innerHTML = (toJson.localidade??localidade);
document.getElementById('estado').innerHTML = (toJson.estado??estado);
document.getElementById('logradouro').innerHTML = (toJson.logradouro??logradouro);
document.getElementById('bairro').innerHTML = (toJson.bairro??bairro);
document.getElementById('regiao').innerHTML = (toJson.regiao??regiao);
}
  
} catch (error) {

document.getElementById('cidade').innerHTML = localidade;
document.getElementById('estado').innerHTML = estado;
document.getElementById('logradouro').innerHTML = logradouro;
document.getElementById('bairro').innerHTML = bairro;
document.getElementById('regiao').innerHTML = regiao;
}

}

if(!cepString){
document.getElementById('inputText').value = "";
}
