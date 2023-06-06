document.addEventListener('DOMContentLoaded', function() {
  let text = localStorage.getItem("cadastro");
  let obj = JSON.parse(text);
  document.getElementById("nome").innerHTML = obj.nome;
  document.getElementById("data_nasci").innerHTML = obj.Data_de_nascimento;
  document.getElementById("cpf").innerHTML = obj.CPF;
  document.getElementById("telefone").innerHTML = obj.Celular;
  document.getElementById("email").innerHTML = obj.Email;
  document.getElementById("sus").innerHTML = obj.Numero_carteira;
  document.getElementById("endereco").innerHTML = obj.Rua +", "+ obj.Numero +" - "+ obj.Bairro +" "+ obj.Cidade +" "+ obj.UF;
  


}, false);

function validarFormulario(event) {
  var camposRequeridos = document.querySelectorAll('input[required]');
  var formularioValido = true;

  camposRequeridos.forEach(function(campo) {
      if (campo.value === '') {
          formularioValido = false;
      }
  });

  if (!formularioValido) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      event.preventDefault(); // Impede o envio do formulário
      return false;
  }

  return true; // Permite o envio do formulário
}

function salvar(){
  const lista_dados = {
    nome : nome.value,
    Data_de_nascimento: data_nasc.value,
    Sexo: genero.value,
    CPF: cpf.value,
    Estado_civil: estado_civil.value,
    Celular: celular.value,
    Telefone: telefone.value,
    Dependente: nome_dependente.value,
    Data_nascimento_dependente: data_nasc_dependente.value,
    Genero_dependente: genero_dependente.value,
    Plano_de_saude: plano_de_saude.value,
    Numero_carteira: num_carteira.value,
    Nome_usuario: nome_de_usuario.value,
    Email: email.value,
    Senha: senha.value,
    CEP: cep.value,
    Rua: rua.value,
    Numero: numero.value,
    Bairro: bairro.value,
    Cidade: cidade.value,
    UF: uf.value
  }
    localStorage.setItem("cadastro", JSON.stringify(lista_dados));
    alert ("Cadastro realizado com sucesso!")
    window.history.back();
}

function logar() {
  let text = localStorage.getItem("cadastro");
  let obj = JSON.parse(text);
  var login = document.getElementById("userName").value;
  var senha = document.getElementById("senha").value;

  if (login == obj["Nome_usuario"] && senha == obj["Senha"]) {
    window.location.href = "pagina_inicial.html"
    alert("Login efetuado com sucesso!");
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
function listar_dados(){
  let text = localStorage.getItem("cadastro");
  let obj = JSON.parse(text);
  document.getElementById("nomeee").innerHTML = obj.nome;
}
//FUNÇÃO CORRETA
/*function listar_dados(){
  let text = localStorage.getItem("cadastro");
  let obj = JSON.parse(text);
  const lista_dados = JSON.parse(localStorage.getItem("cadastro"));
  document.getElementById("lista_dados1").innerHTML = obj.nome;
  document.getElementById("lista_dados2").innerHTML = obj.Data_de_nascimento;
  
}*/

function carregar_dados(){
  let text = localStorage.getItem("cadastro");
  let obj = JSON.parse(text);
  document.getElementById("nome").value = obj.nome;
  document.getElementById("data_nasc").value = obj.Data_de_nascimento;
  document.getElementById("cpf").value = obj.CPF;
  document.getElementById("genero").value = obj.Sexo;
  document.getElementById("estado_civil").value = obj.Estado_civil;
  document.getElementById("celular").value = obj.Celular;
  document.getElementById("telefone").value = obj.Telefone;
  document.getElementById("nome_dependente").value = obj.Dependente;
  document.getElementById("data_nasc_dependente").value = obj.Data_nascimento_dependente;
  document.getElementById("genero_dependente").value = obj.Genero_dependente;
  document.getElementById("plano_de_saude").value = obj.Plano_de_saude;
  document.getElementById("num_carteira").value = obj.Numero_carteira;
  document.getElementById("nome_de_usuario").value = obj.Nome_usuario;
  document.getElementById("email").value = obj.Email;
  document.getElementById("confirmar_email").value = obj.Email;
  document.getElementById("senha").value = obj.Senha;
  document.getElementById("confirmar_senha").value = obj.Senha;
  document.getElementById("cep").value = obj.CEP;
  document.getElementById("rua").value = obj.Rua;
  document.getElementById("numero").value = obj.Numero;
  document.getElementById("bairro").value = obj.Bairro;
  document.getElementById("cidade").value = obj.Cidade;
  document.getElementById("uf").value = obj.UF;

}

function add_dependente() {
  var x = document.getElementById("dependente");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

function add_plano() {
  var x = document.getElementById("plano");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

function redirecionar_pagina_perfil(){
  window.location.href = "editar_perfil.html"
}

function cancelar(){
  window.history.back();
}