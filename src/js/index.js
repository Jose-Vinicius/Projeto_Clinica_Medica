let form = document.getElementById("form-paciente");

function createObjForm(nomePaciente, cpfPaciente, telefonePaciente, emailPaciente, dataNascimentoPaciente, generoPaciente, paisPaciente, estadoPaciente, CEPPaciente, ruaPaciente, bairroPaciente, especialidades, dataConsulta, horariosDisponiveis){
    return {
        "nomePaciente": nomePaciente, 
        "cpfPaciente": cpfPaciente, 
        "telefonePaciente": telefonePaciente, 
        "emailPaciente": emailPaciente, 
        "dataNascimentoPaciente": dataNascimentoPaciente, 
        "generoPaciente": generoPaciente, 
        "paisPaciente": paisPaciente, 
        "estadoPaciente": estadoPaciente, 
        "CEPPaciente": CEPPaciente, 
        "ruaPaciente": ruaPaciente, 
        "bairroPaciente": bairroPaciente, 
        "especialidades": especialidades, 
        "dataConsulta": dataConsulta, 
        "horariosDisponiveis": horariosDisponiveis
    }
}

function handleSubmit(e){
    e.preventDefault();  
    let nomePaciente = document.getElementById("nomePaciente");
    let cpfPaciente = document.getElementById("cpfPaciente");
    let telefonePaciente = document.getElementById("telefonePaciente");
    let emailPaciente = document.getElementById("emailPaciente");
    let dataNascimentoPaciente = document.getElementById("dataNascimentoPaciente");
    let generoPaciente = document.getElementById("generoPaciente");
    let paisPaciente = document.getElementById("paisPaciente");
    let estadoPaciente = document.getElementById("estadoPaciente");
    let CEPPaciente = document.getElementById("CEPPaciente");
    let ruaPaciente = document.getElementById("ruaPaciente");
    let bairroPaciente = document.getElementById("bairroPaciente");
    let especialidades = document.getElementById("especialidades");
    let dataConsulta = document.getElementById("dataConsulta");
    let horariosDisponiveis = document.getElementById("horariosDisponiveis");

    let teste = createObjForm(nomePaciente.value, cpfPaciente.value, telefonePaciente.value, emailPaciente.value, dataNascimentoPaciente.value, generoPaciente.value, paisPaciente.value, estadoPaciente.value, CEPPaciente.value, ruaPaciente.value, bairroPaciente.value, especialidades.value, dataConsulta.value, horariosDisponiveis.value);

    console.log(teste);
}

form.addEventListener("submit", handleSubmit ,true)
