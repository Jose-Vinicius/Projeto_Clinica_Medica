const urlParametros = new URLSearchParams(window.location.search);
const parametros = Object.fromEntries(urlParametros.entries());

let nomePaciente = document.getElementById("ficha-nome");
let cpfPaciente = document.getElementById("ficha-cpf");
let telefonePaciente = document.getElementById("ficha-telefone");
let emailPaciente = document.getElementById("ficha-email");
let dataNascimentoPaciente = document.getElementById("ficha-nascimento");
let generoPaciente = document.getElementById("ficha-genero")
let paisPaciente = document.getElementById("ficha-pais");
let estadoPaciente = document.getElementById("ficha-estado");
let CEPPaciente = document.getElementById("ficha-cep");
let ruaPaciente = document.getElementById("ficha-rua");
let bairroPaciente = document.getElementById("ficha-bairro");
let especialidades = document.getElementById("ficha-especialista");
let dataConsulta = document.getElementById("ficha-dataConsulta");
let horariosDisponiveis = document.getElementById("ficha-horariosConsulta");

function inserir2digitosData(data){
    return data.toString().padStart(2, '0')
}

function transformarData(dataFormatar){
    let data = new Date(dataFormatar);
    let ano = data.getFullYear();
    let mes = inserir2digitosData(data.getMonth() + 1);
    let dia = inserir2digitosData(data.getUTCDate());

    return `${dia}/${mes}/${ano}`
}


nomePaciente.innerHTML = parametros.nomePaciente;
cpfPaciente.innerHTML = parametros.cpfPaciente;
telefonePaciente.innerHTML = parametros.telefonePaciente;
emailPaciente.innerHTML = parametros.emailPaciente;
generoPaciente.innerHTML = parametros.generoPaciente;
dataNascimentoPaciente.innerHTML = transformarData(parametros.dataNascimentoPaciente);
paisPaciente.innerHTML = parametros.paisPaciente;
estadoPaciente.innerHTML = parametros.estadoPaciente;
CEPPaciente.innerHTML = parametros.CEPPaciente;
ruaPaciente.innerHTML = parametros.ruaPaciente;
bairroPaciente.innerHTML = parametros.bairroPaciente;
especialidades.innerHTML = parametros.especialidades;
dataConsulta.innerHTML = transformarData(parametros.dataConsulta);
horariosDisponiveis.innerHTML = parametros.horariosDisponiveis;


