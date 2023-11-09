// Variáveis aonde é armazenado os parâmetros vindos da URL
const urlParametros = new URLSearchParams(window.location.search);
const parametros = Object.fromEntries(urlParametros.entries());

let fichaConsulta = document.getElementById("ficha-consulta");

//Função responsável por adicionar um zero para datas aonde somente teria 1 digito ex: 5 -> 05
function inserir2digitosData(data){
    return data.toString().padStart(2, '0')
}

//Função responsável por formatar a data vinda do formulário HTML
function transformarData(dataFormatar){
    let data = new Date(dataFormatar);
    let ano = data.getFullYear();
    let mes = inserir2digitosData(data.getMonth() + 1);
    let dia = inserir2digitosData(data.getUTCDate());

    return `${dia}/${mes}/${ano}`
}

//função responsável por verificar se a string retornada é uma data, e formata-la
function verificarSeUmaData(str){
    //indexOf ira verificar se a string contem um '-' se não contiver retorna -1
    if(str.indexOf('-') !== -1 && str.indexOf('.') == -1){
        console.log(str.indexOf('-') !== -1)
        return transformarData(str)
    } else{
        return str
    }
}

//função que transforma os parametros recebidos da URL
function transformarObjeto(obj){
    let arrayObj = [];
    for(const key in obj){
        //regex que separa as palavras que estão com letra maiúscula das com letra minuscula e adiciona um espaço em branco entre elas   
        let alterarTitulo = key.match(/([A-Z]?[^A-Z]*)/gm).slice(0, -1).join(" ")
        let objetoTransformado = {
            'chave': key, 
            'identificador': alterarTitulo.toUpperCase(),
            'valor': verificarSeUmaData(obj[key])}
        arrayObj.push(objetoTransformado)
    }
    return arrayObj
}

//Inserir os dados em tela, apos estarem formatados
function inserirElementosNaTela(){
    let array = transformarObjeto(parametros);
    for (let i = 0; i < array.length; i++){
        //insere os elementos gerados dentro do elemento pai, apos o ultimo elemento filho
        fichaConsulta.insertAdjacentHTML("beforeend",
        `<div>
            <h2>${array[i].identificador}</h2>
            <hr>
            <span>${array[i].valor}</span>
        </div>`
        );
    }
}

inserirElementosNaTela();

