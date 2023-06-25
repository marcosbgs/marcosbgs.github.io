let logado = '';

document.addEventListener('DOMContentLoaded', function () {
  let text = localStorage.getItem("cadastro");
  let obj = JSON.parse(text);
  document.getElementById("nome").innerHTML = obj.nome;
  document.getElementById("data_nasci").innerHTML = obj.Data_de_nascimento;
  document.getElementById("cpf").innerHTML = obj.CPF;
  document.getElementById("telefone").innerHTML = obj.Celular;
  document.getElementById("email").innerHTML = obj.Email;
  document.getElementById("sus").innerHTML = obj.Numero_carteira;
  document.getElementById("endereco").innerHTML = obj.Rua + ", " + obj.Numero + " - " + obj.Bairro + " " + obj.Cidade + " " + obj.UF;

}, false);

var var_medico;
var var_especialidade;
var var_crm;
var var_telefone;
var var_email;
var var_endereco;
var var_particular;
var paciente;

function salvar() {
  const inputs = document.querySelectorAll('input[required]');
  const isAllInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');

  if (isAllInputsFilled) {
    const lista_dados = {
      nome: nome.value,
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
    };

    localStorage.setItem("cadastro", JSON.stringify(lista_dados));
    alert("Cadastro realizado com sucesso!");
    window.history.back();  
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }
}


function logar() {
  var login = document.getElementById("userName").value;
  var senha = document.getElementById("senha").value;
  var chaveEncontrada = false;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const valor = localStorage.getItem(key);

    try {
      const objetoChave = JSON.parse(valor);
      if (objetoChave.Nome_usuario === login && objetoChave.Senha === senha) {
        chaveEncontrada = true;
        break;
      }
    } catch (error) {
    }
  }

  if (chaveEncontrada) {
    logado = login;
    window.location.href = "pagina_inicial.html";
    alert("Login efetuado com sucesso!");
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function listar_dados() {
  let text = localStorage.getItem("cadastro");
  let obj = JSON.parse(text);
  document.getElementById("nomeee").innerHTML = obj.nome;
}

function carregar_dados() {
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

function redirecionar_pagina_perfil() {
  window.location.href = "editar_perfil.html"
}

function cancelar() {
  window.history.back();
}

function mostrarMedicos() {
  const especialidadeSelect = document.getElementById('especialidadeSelect');
  const cardContainer = document.getElementById('cardContainer');
  const especialidadeSelecionada = especialidadeSelect.value;

  cardContainer.innerHTML = '';

  if (especialidadeSelecionada === 'cardiologia') {
    const medico1 = {
      nome: 'Carlos Monteiro dos Santos',
      especialidade: 'Cardiologista',
      CRM: 'CRM/MG 54965',
      telefone: '(32) 5514-2011',
      email: 'carlos.santos@gmail.com',
      endereco: 'Rua Alameda Santos, 200 Paraíso - Belo Horizonte MG',
      particular: 'R$250,00',
      imagem: 'Carlos.png'
    };
    const medico2 = {
      nome: 'Marina Soares de Almeida',
      especialidade: 'Cardiologista',
      CRM: 'CMR/MG 67890',
      telefone: '(32) 5050-4511',
      email: 'marina_cardio@gmail.com',
      endereco: 'Rua Galvão Bueno, 45 Jardim Helena - Belo Horizonte MG',
      particular: 'R$350,00',
      imagem: 'Marina.png'
    };

    const cardMedico1 = criarCardMedico(medico1);
    const cardMedico2 = criarCardMedico(medico2);

    cardContainer.appendChild(cardMedico1);
    cardContainer.appendChild(cardMedico2);
  } else if (especialidadeSelecionada === 'dermatologia') {
    const medico1 = {
      nome: 'Flavia dos Anjos Saldanha',
      especialidade: 'Dermatologista',
      CRM: 'CMR/MG 65455',
      telefone: '(32) 8765-4321',
      email: 'flavia.saldanha@gmail.com',
      endereco: 'Rua Arlindo Fraga, 13 Bom Passeio - Belo Horizonte MG',
      particular: 'R$200,00',
      imagem: 'Flavia.png'
    };
    const medico2 = {
      nome: 'Clarisse Batista Soares',
      especialidade: 'Dermatologista',
      CRM: 'CMR/MG 50554',
      telefone: '(32) 2345-6789',
      email: 'clarisse_derm@hotmail.com',
      endereco: 'Av. Bandeirantes, 1010 Vila Maria - Belo Horizonte MG',
      particular: 'R$280,00',
      imagem: 'Clarisse.png'
    };

    const cardMedico1 = criarCardMedico(medico1);
    const cardMedico2 = criarCardMedico(medico2);

    cardContainer.appendChild(cardMedico1);
    cardContainer.appendChild(cardMedico2);
  } else if (especialidadeSelecionada === 'psicologia') {
    const medico1 = {
      nome: 'Helio Magalhães',
      especialidade: 'Psicólogo',
      CRM: 'CMR/MG 49875',
      telefone: '(32) 5544-5241',
      email: 'psico_helio@gmail.com',
      endereco: 'Rua Teodoro Sampaio, 88 Vila São João - Belo Horizonte MG',
      particular: 'R$150,00',
      imagem: 'Helio.png'
    };
    const medico2 = {
      nome: 'Fernanda Maria Pacheco',
      especialidade: 'Psicóloga',
      CRM: 'CMR/MG 50504',
      telefone: '(32) 6654-7878',
      email: 'fernanda_pacheco@hotmail.com',
      endereco: 'Rua Mataripe, 22 Jardim Boa Vista - Belo Horizonte MG',
      particular: 'R$200,00',
      imagem: 'Fernanda.png'
    };

    const cardMedico1 = criarCardMedico(medico1);
    const cardMedico2 = criarCardMedico(medico2);

    cardContainer.appendChild(cardMedico1);
    cardContainer.appendChild(cardMedico2);
  }
}

function criarCardMedico(medico) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (medico.especialidade === 'cardiologia') {
    card.classList.add('card-medico-cardiologia');
  } else if (medico.especialidade === 'dermatologia') {
    card.classList.add('card-medico-dermatologia');
  }

  const imagemElement = document.createElement('img');
  imagemElement.classList.add('card-imagem');
  imagemElement.src = `src/${medico.imagem}`;

  const nomeElement = document.createElement('p');
  nomeElement.classList.add('card-info');
  nomeElement.innerHTML = `<span></span> ${medico.nome}`;

  const especialidadeElement = document.createElement('div');
  especialidadeElement.classList.add('card-info');
  especialidadeElement.innerHTML = `<span></span> ${medico.especialidade}`;

  const crmElement = document.createElement('div');
  crmElement.classList.add('card-info');
  crmElement.innerHTML = `<span></span> ${medico.CRM}`;

  const telefoneElement = document.createElement('div');
  telefoneElement.classList.add('card-info');
  telefoneElement.innerHTML = `<span>Telefone:</span> ${medico.telefone}`;

  const emailElement = document.createElement('div');
  emailElement.classList.add('card-info');
  emailElement.innerHTML = `<span>Email:</span> ${medico.email}`;

  const enderecoElement = document.createElement('div');
  enderecoElement.classList.add('card-info');
  enderecoElement.innerHTML = `<span>Endereço:</span> ${medico.endereco}`;

  const particularElement = document.createElement('div');
  particularElement.classList.add('card-info');
  particularElement.innerHTML = `<span>Consulta particular:</span> ${medico.particular}`;

  card.addEventListener('click', function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
      card.classList.remove('selected');
    });

    this.classList.add('selected');

    var_medico = medico.nome;
    var_especialidade = medico.especialidade;
    var_crm = medico.CRM;
    var_telefone = medico.telefone;
    var_email = medico.email;
    var_endereco = medico.endereco;
    var_particular = medico.particular;
  });

  card.appendChild(imagemElement);
  card.appendChild(nomeElement);
  card.appendChild(especialidadeElement);
  card.appendChild(crmElement);
  card.appendChild(telefoneElement);
  card.appendChild(emailElement);
  card.appendChild(enderecoElement);
  card.appendChild(particularElement);

  return card;
}
function agendamento() {
  var objeto = localStorage.getItem("cadastro");
  var text = JSON.parse(objeto);
  var paciente = document.querySelector('input[name="atendimento"]:checked').value;

  var dados = {
    atendimento: paciente,
  };

  if (paciente === "Titular") {
    paciente = text.nome;
    dados.atendimento = paciente;

    var valorInput = '';
    var plano = '';
    var divSUS = document.getElementById('container_SUS');
    var divConvenio = document.getElementById('container_convenio');
    var carteira = '';
  
    if (divSUS.style.display !== 'none') {
      valorInput = document.getElementById('SUS').value;
      plano = "SUS";
      carteira = " - Carteira nº ";
    } else if (divConvenio.style.display !== 'none') {
      valorInput = divConvenio.querySelector('input.convenio').value;
      plano = document.getElementById('convenio').value;
      carteira = " - Carteira nº ";
    } else  {
      valorInput = "";
      plano = "Particular";
      carteira = "";
    }

    dados.atendimento = paciente;
    dados.convenio = plano + carteira + valorInput;
  } else if (paciente === "Dependente") {
    paciente = text.Dependente;

    var valorInput = '';
    var plano = '';
    var divSUS = document.getElementById('container_SUS');
    var divConvenio = document.getElementById('container_convenio');
    var carteira = '';
  
    if (divSUS.style.display !== 'none') {
      valorInput = document.getElementById('SUS').value;
      plano = "SUS";
      carteira = " - Carteira nº ";
    } else if (divConvenio.style.display !== 'none') {
      valorInput = divConvenio.querySelector('input.convenio').value;
      plano = document.getElementById('convenio').value;
      carteira = " - Carteira nº ";
    } else  {
      valorInput = "";
      plano = "Particular";
      carteira = "";
    }

    dados.atendimento = paciente;
    dados.convenio = plano + carteira + valorInput;
  }

  localStorage.setItem("consulta", JSON.stringify(dados));
  window.location.href = "agendamento_consulta2.html"
}





function confirmar_agendamento() {
  var popup = document.getElementById('popup');
  var text = localStorage.getItem('consulta');
  var obj = JSON.parse(text);
  var dia = document.getElementById("dataSelecionada").value;
  var hora = document.getElementById("horarioSelecionado").value;
  const consulta = {
    medico: var_medico,
    especialidade: var_especialidade,
    CRM: var_crm,
    telefone: var_telefone,
    email: var_email,
    endereco: var_endereco,
    data: dia,
    horario: hora,
    atendimento: obj.atendimento,
    convenio: obj.convenio,
    valor: var_particular,
  };

  localStorage.setItem('consulta', JSON.stringify(consulta));
  abrirPopup();
}

function abrirPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function voltarPaginaInicial() {
  window.location.href = "pagina_inicial.html";
}

$(document).ready(function () {
  $("#calendario").datepicker({
    dateFormat: "dd/mm/yy",
    showOtherMonths: true,
    selectOtherMonths: true,
    changeMonth: true,
    changeYear: false,
    showButtonPanel: false,
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ],
    monthNamesShort: [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ],
    dayNames: [
      "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ],
    dayNamesMin: [
      "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
    ],
    currentText: "Hoje",

    onSelect: function (dateText, inst) {
      $("#dataSelecionada").val(dateText);
    }
  });
});

$(document).ready(function () {
  $(".periodo-btn").click(function () {
    $(".periodo-btn").removeClass("ativo");
    $(this).addClass("ativo");

    var periodoSelecionado = $(this).data("periodo");

    $(".horario-btn").hide();

    $("." + periodoSelecionado).fadeIn(500);

    $("#horario").css("white-space", "normal");
  });
});
$(document).ready(function () {
  $(".horario-btn").click(function () {
    $(".horario-btn").removeClass("clicked");
    $(this).addClass("clicked");

    var horarioSelecionado = $(this).text();

    $("#horarioSelecionado").val(horarioSelecionado);
  });
});
$(document).ready(function () {
  $(".periodo-btn").click(function () {
    $(".periodo-btn").removeClass("active");
    $(this).addClass("active");
  });
});

function exibeConsulta() {
  if (localStorage.getItem('consulta')) {
    let text = localStorage.getItem("consulta");
    let obj = JSON.parse(text);

    document.getElementById("p1").innerHTML = obj.especialidade;
    document.getElementById("p2").innerHTML = "Médico " + obj.medico;
    document.getElementById("cpf").innerHTML = obj.CPF;
    document.getElementById("telefone").innerHTML = obj.Celular;
    document.getElementById("email").innerHTML = obj.Email;
    document.getElementById("sus").innerHTML = obj.Numero_carteira;
    document.getElementById("endereco").innerHTML = obj.Rua + ", " + obj.Numero + " - " + obj.Bairro + " " + obj.Cidade + " " + obj.UF;
  }

  let text = localStorage.getItem("consulta");
  let obj = JSON.parse(text);
  document.getElementById("nome").innerHTML = obj.nome;
  document.getElementById("data_nasci").innerHTML = obj.Data_de_nascimento;
  document.getElementById("cpf").innerHTML = obj.CPF;
  document.getElementById("telefone").innerHTML = obj.Celular;
  document.getElementById("email").innerHTML = obj.Email;
  document.getElementById("sus").innerHTML = obj.Numero_carteira;
  document.getElementById("endereco").innerHTML = obj.Rua + ", " + obj.Numero + " - " + obj.Bairro + " " + obj.Cidade + " " + obj.UF;
}

function verificarLocalStorage_consulta() {
  var consultaSalva = localStorage.getItem('consulta');

  if (consultaSalva) {
    var informacoes = JSON.parse(consultaSalva);
    exibirInformacoes_consulta(informacoes);
  } else {
    exibirMensagem('Não há consultas agendadas.');
  }
}

function exibirInformacoes_consulta(informacoes) {
  var card = document.getElementById('card_perfil');
  card.innerHTML = '<p><strong> Data: ' + informacoes.data + ' - Horário: ' + informacoes.horario + '</p></strong>' +
    '<p>Paciente: ' + informacoes.atendimento + 
    '<p>Convênio: ' + informacoes.convenio + '</p>' +
    '<hr></hr>' +
    '<p>Especialidade: ' + informacoes.especialidade + '</p>' +
    '<p>Médico(a):  ' + informacoes.medico + ' - ' + informacoes.CRM + '</p>' +
    '<p>Consulta particular:  ' + informacoes.valor + '</p>' +
    '<p>Endereço: ' + informacoes.endereco + '</p>' +
    '<p>Telefone: ' + informacoes.telefone + '</p>' +
    '<p>Email: ' + informacoes.email + '</p>';
    
}

function exibirMensagem(mensagem) {
  var card = document.getElementById('card_perfil');
  card.innerHTML = '<p>' + mensagem + '</p>';
}

document.getElementById('mostrarInformacoes').addEventListener('click', verificarLocalStorage);

function verificarLocalStorage_exame() {
  var exameSalvo = localStorage.getItem('exame');

  if (exameSalvo) {
    var informacoes = JSON.parse(exameSalvo);
    exibirInformacoes(informacoes);
  } else {
    exibirMensagem('Não há exames agendados.');
  }
}

function exibirInformacoes(informacoes) {
  var card = document.getElementById('card_perfil');
  card.innerHTML = '<p><strong> Data: ' + informacoes.data + ' - Horário: ' + informacoes.horario + '</p></strong>' +
  '<p>Paciente: ' + informacoes.atendimento + 
    '<p>Convênio: ' + informacoes.convenio + '</p>' +
    '<hr></hr>' +
    '<p>Exame: ' + informacoes.exame + '</p>' +
    '<p>Exame particular:  ' + informacoes.valor + '</p>' +
    'Local: ' + informacoes.medico + '</p>' +
    '<p>Endereço: ' + informacoes.endereco + '</p>' +
    '<p>Telefone: ' + informacoes.telefone + '</p>' +
    '<p>Email: ' + informacoes.email + '</p>';
}

function exibirMensagem(mensagem) {
  var card = document.getElementById('card_perfil');
  card.innerHTML = '<p>' + mensagem + '</p>';
}
document.getElementById('mostrarInformacoes').addEventListener('click', verificarLocalStorage);

  var input = document.getElementById("meuInput");
  var mensagemErro = document.getElementById("mensagemErro");

  input.addEventListener("input", function() {
    var valor = input.value;
    if (!verificarCaracteresEspeciais(valor)) {
      mensagemErro.style.display = "block";
    } else {
      mensagemErro.style.display = "none";
    }
  });

var meuInput = document.getElementById("nome");

nome.addEventListener("invalid", function () {
  nome.setCustomValidity("Por favor, insira somente letras");
});

nome.addEventListener("input", function () {
  nome.setCustomValidity("");
});

function validarMaioridade(input) {
  var data_nasc = new Date(input.value);
  var dataAtual = new Date();

  var diferencaAnos = dataAtual.getFullYear() - data_nasc.getFullYear();

  if (diferencaAnos < 18) {
    input.setCustomValidity("É necessário ter pelo menos 18 anos de idade. Caso seja menor de idade, faça o cadastro no nome do responsável e adicione dependente");
  } else {
    input.setCustomValidity("");
  }
}

function formatarTelefone(input) {
  var numero = input.value.replace(/\D/g, '');

  if (numero.length === 11) {
    var numeroFormatado = '(' + numero.substr(0, 2) + ') ' + numero.substr(2, 9);
    input.value = numeroFormatado;
    input.setCustomValidity('');
  } else {
    input.setCustomValidity('Insira um número de telefone válido com DDD sem "( )"');
  }
}

function validarEntrada(input) {
  var valor = input.value;
  var novoValor = "";

  for (var i = 0; i < valor.length; i++) {
    var caractere = valor.charAt(i);
    if (/[A-Za-z0-9-_]/.test(caractere)) {
      novoValor += caractere;
    }
  }

  input.value = novoValor;
}

function validarEmails() {
  var email = document.getElementById("email").value;
  var confirmarEmail = document.getElementById("confirmar_email").value;
  var confirmarEmailInput = document.getElementById("confirmar_email");

  if (email !== confirmarEmail) {
    confirmarEmailInput.setCustomValidity('Os e-mails não coincidem');
  } else {
    confirmarEmailInput.setCustomValidity('');
  }
}

function validarSenhas() {
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmar_senha").value;
  var confirmarSenhaInput = document.getElementById("confirmar_senha");

  if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(senha)) {
    confirmarSenhaInput.setCustomValidity('A senha deve conter letras e números');
  } else if (senha !== confirmarSenha) {
    confirmarSenhaInput.setCustomValidity('As senhas não coincidem');
  } else {
    confirmarSenhaInput.setCustomValidity('');
  }
}

var inputCep = document.getElementById("cep");
var inputRua = document.getElementById("rua");
var inputBairro = document.getElementById("bairro");
var inputCidade = document.getElementById("cidade");

inputCep.addEventListener("blur", function() {
  var cep = inputCep.value.replace(/\D/g, "");

  if (cep.length === 8) {
    buscarEndereco(cep);
  }
});

function buscarEndereco(cep) {
  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (!data.erro) {
        inputRua.value = data.logradouro;
        inputBairro.value = data.bairro;
        inputCidade.value = data.localidade;
      } else {
        inputRua.value = "";
        inputBairro.value = "";
        inputCidade.value = "";
      }
    })
    .catch(function(error) {
      console.log("Ocorreu um erro: ", error);
    });
}
