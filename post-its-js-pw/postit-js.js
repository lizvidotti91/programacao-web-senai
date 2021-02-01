var app = window.document.querySelector("div.app");

// ESTILIZANDO APP
app.style.backgroundColor = "#14213d";
app.style.height = "100vh";
app.style.width = "100vw";

var inputNote = window.document.createElement("input");
var btnSalvar = window.document.createElement("button");
var postIt = window.document.createElement("div");

// PARA O INPUTNOTE
inputNote.setAttribute("type", "text");
inputNote.setAttribute("id", "note");
inputNote.setAttribute("name", "note");
inputNote.setAttribute("placeholder", "sua nota aqui");

//ESTILIZANDO INPUTNOTE
inputNote.style.border = "none";
inputNote.style.boxShadow = "4px 4px #000000";
inputNote.style.height = "5vh";
inputNote.style.margin = "10vh 2vh 20vh 10vh";
inputNote.style.width = "40vw";

// PARA O BTNSALVAR
btnSalvar.setAttribute("type", "submit");
btnSalvar.setAttribute("id", "submit");
btnSalvar.setAttribute("name", "submit");

// ESTILIZANDO BTNSALVAR
btnSalvar.style.backgroundColor = "#84DD63";
btnSalvar.style.border = "none";
btnSalvar.style.boxShadow = "4px 4px #000000";
btnSalvar.style.height = "5vh";
btnSalvar.style.width = "20vw";

var txtSalvar = window.document.createTextNode("Adicionar Nota");
btnSalvar.appendChild(txtSalvar);

// PARA O POST-IT
postIt.setAttribute("id", "postIt");

// ESTILIZANDO POST-IT
postIt.style.display = "flex";
postIt.style.flexWrap = "wrap";
postIt.style.height = "50vh";
postIt.style.justifyContent = "center";
postIt.style.margin = "0 auto";
postIt.style.width = "80vw";

// ADICIONANDO EM APP
app.appendChild(inputNote);
app.appendChild(btnSalvar);
app.appendChild(postIt);

// CRIANDO FUNÇÃO AO CLICAR NO BOTÃO
btnSalvar.onclick = function () {
    recordNote();
    resetForm();
};

function recordNote() {
    var box = window.document.createElement("div");
    box.setAttribute("id", "box");

    if (inputNote.value == "") {
        alert("Campo em branco! Preencha o campo de nota!");
    } else {
        var txtPostIt = window.document.createTextNode(inputNote.value);
    }

    box.appendChild(txtPostIt);
    postIt.appendChild(box);

    box.style.alignItems = "center";
    box.style.backgroundColor = "#fca311";
    box.style.boxShadow = "4px 4px #000000";
    box.style.display = "flex";
    box.style.height = "20vh";
    box.style.justifyContent = "center";
    box.style.margin = "2vw";
    box.style.width = "20vh";
}

function resetForm() {
    inputNote.value = "";
}
