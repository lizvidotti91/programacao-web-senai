var app = window.document.querySelector("div.app");

// ESTILIZANDO APP
app.style.alignItems = "center";
app.style.backgroundColor = "#14213d";
app.style.display = "flex";
app.style.flexDirection = "column";
app.style.height = "100vh";
app.style.justifyContent = "center";
app.style.width = "100vw";

var inputNome = window.document.createElement("input");
var inputIdade = window.document.createElement("input");
var inputEstadoCivil = window.document.createElement("select");
var btnCadastrar = window.document.createElement("button");
var btnCancelar = window.document.createElement("button");

// PARA O INPUT NOME
inputNome.setAttribute("type", "text");
inputNome.setAttribute("id", "nome");
inputNome.setAttribute("name", "nome");
inputNome.setAttribute("placeholder", "seu nome aqui");

// ESTILIZANDO INPUT NOME
inputNome.style.border = "none";
inputNome.style.borderRadius = "5px";
inputNome.style.boxShadow = "5px 5px 0px #000000";
inputNome.style.margin = "2vh";
inputNome.style.padding = "10px";

// PARA O INPUT IDADE
inputIdade.setAttribute("type", "number");
inputIdade.setAttribute("id", "idade");
inputIdade.setAttribute("name", "nome");
inputIdade.setAttribute("placeholder", "sua idade aqui");

// ESTILIZANDO INPUT IDADE
inputIdade.style.border = "none";
inputIdade.style.borderRadius = "5px";
inputIdade.style.boxShadow = "5px 5px 0px #000000";
inputIdade.style.margin = "2vh";
inputIdade.style.padding = "10px";

// PARA O SELECT ESTADO CIVIL
inputEstadoCivil.setAttribute("id", "estadoCivil");
inputEstadoCivil.setAttribute("name", "estadoCivil");
inputEstadoCivil.setAttribute("disabled", true);

// ESTILIZANDO SELECT ESTADO CIVIL
inputEstadoCivil.style.border = "none";
inputEstadoCivil.style.borderRadius = "5px";
inputEstadoCivil.style.boxShadow = "5px 5px 0px #000000";
inputEstadoCivil.style.margin = "2vh";
inputEstadoCivil.style.padding = "10px";

// HABILITANDO SELECT IDADE QUANDO A IDADE FOR MAIOR OU IGUAL A 18
inputIdade.onchange = function () {
    if (inputIdade.value >= 18) {
        document.querySelector('#estadoCivil').disabled = false;
    }
}

// PARA OS OPTIONS DO SELECT ESTADO CIVIL
var primeiro = window.document.createElement("option");
primeiro.setAttribute("value", "");

var solteiro = window.document.createElement("option");
solteiro.setAttribute("value", "Solteiro");

var casado = window.document.createElement("option");
casado.setAttribute("value", "Casado");

var viuvo = window.document.createElement("option");
viuvo.setAttribute("value", "viuvo");

var divorciado = window.document.createElement("option");
divorciado.setAttribute("value", "Divorciado");

var textPrimeiro = window.document.createTextNode("seu estado civil");
var textSolteiro = window.document.createTextNode("Solteiro");
var textCasado = window.document.createTextNode("Casado");
var textViuvo = window.document.createTextNode("Viúvo");
var textDivorciado = window.document.createTextNode("Divorciado");

primeiro.appendChild(textPrimeiro);
solteiro.appendChild(textSolteiro);
casado.appendChild(textCasado);
viuvo.appendChild(textViuvo);
divorciado.appendChild(textDivorciado);

inputEstadoCivil.appendChild(primeiro);
inputEstadoCivil.appendChild(solteiro);
inputEstadoCivil.appendChild(casado);
inputEstadoCivil.appendChild(viuvo);
inputEstadoCivil.appendChild(divorciado);

// PARA O BUTTON CADASTRAR
btnCadastrar.setAttribute("type", "submit");
btnCadastrar.setAttribute("id", "submit");
btnCadastrar.setAttribute("name", "submit");

// ESTILIZANDO BUTTON CADASTRAR
btnCadastrar.style.backgroundColor = "#fca311";
btnCadastrar.style.border = "none";
btnCadastrar.style.borderRadius = "5px";
btnCadastrar.style.boxShadow = "2px 2px 0px #000000";
btnCadastrar.style.cursor = "pointer";
btnCadastrar.style.margin = "2vh";
btnCadastrar.style.padding = "10px";

var txtCadastrar = window.document.createTextNode("Cadastrar");

btnCadastrar.appendChild(txtCadastrar);

btnCadastrar.onclick = function () {
    mostraNome();
    recarrega();
};

function mostraNome() {
    // SÓ DEVE APARECER ESTADO CIVIL, SE A PESSOA FOR MAIOR DE IDADE
    // VERIFICAR SE CAMPOS ESTÃO VAZIOS

    if (inputEstadoCivil.disabled == true) {
        if (inputNome.value == "" || inputIdade.value == "") {
            alert("Existem campos em branco! Verifique e tente novamente.");
        } else {
            alert(`Encontramos ${inputNome.value}, com ${inputIdade.value} anos`);
        }
    } else if (inputEstadoCivil.disabled == false) {
        if (inputNome.value == "" || inputIdade.value == "" || inputEstadoCivil.value == "") {
            alert("Existem campos em branco! Verifique e tente novamente.");
        } else {
            alert(`Encontramos ${inputNome.value}, com ${inputIdade.value} anos, ${inputEstadoCivil.value}`);
        }
    }
}

// PARA O BUTTON CANCELAR
btnCancelar.setAttribute("type", "reset");
btnCancelar.setAttribute("id", "reset");
btnCancelar.setAttribute("name", "reset");

var txtCancelar = window.document.createTextNode("Cancelar");

btnCancelar.appendChild(txtCancelar);

// ESTILIZANDO BUTTON CANCELAR
btnCancelar.style.backgroundColor = "#e5e5e5";
btnCancelar.style.border = "none";
btnCancelar.style.borderRadius = "5px";
btnCancelar.style.boxShadow = "2px 2px 0px #000000";
btnCancelar.style.cursor = "pointer";
btnCancelar.style.margin = "2vh";
btnCancelar.style.padding = "10px";

btnCancelar.onclick = function () {
    recarrega();
};

function recarrega() {
    inputNome.value = "";
    inputIdade.value = "";
    inputEstadoCivil.value = "";
    inputEstadoCivil.disabled = true;
}

// COLOCANDO OS ELEMENTOS NA DIV APP

app.appendChild(inputNome);
app.appendChild(inputIdade);
app.appendChild(inputEstadoCivil);
app.appendChild(btnCadastrar);
app.appendChild(btnCancelar);