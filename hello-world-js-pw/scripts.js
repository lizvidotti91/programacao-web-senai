// PEGANDO UM ELEMENTO DO HTML
// var appElement = window.document.getElementById("app");
var appElement = window.document.querySelector("#app");

console.log(appElement);

// CRIANDO UM ELEMENTO HTML PELO JAVASCRIPT
var btnElement = window.document.createElement("button"); // <button></button>
var inputElement = window.document.createElement("input"); // <input/>

// CRIAR PROPRIEDADES DOS ELEMENTOS
btnElement.setAttribute("id", "btnSalvar"); // <button id="btnSalvar"></button>

// CRIAR O TEXTO QUE APARECE DENTRO DO BOTÃO
var textBotao = window.document.createTextNode("Clique em mim");
btnElement.appendChild(textBotao);

// CRIAR PROPRIEDADES DOS ELEMENTOS
inputElement.setAttribute("id", "txtNome"); // <input id="txtNome"/>
inputElement.setAttribute("type", "text"); // <input id="txtNome" type="text"/>
inputElement.setAttribute("name", "nome"); // <input id="txtNome" type="text" name="nome"/>
inputElement.setAttribute("placeholder", "seu nome aqui"); // <input id="txtNome" type="text" name="nome" placeholder="seu nome aqui"/>

// COLOCAR OS ELEMENTOS CRIADOS NO JAVASCRIPT NO HTML
// aqui, os elementos serão colocados dentro da <div id="app"></div>
appElement.appendChild(inputElement);
appElement.appendChild(btnElement);

// PEGAR O VALOR DIGITADO NO INPUT E EXIBIR NA TELA
btnElement.onclick = function () {
    if (inputElement.value == "") {
        alert("Por favor, digite seu nome no campo especificado");
    } else {
        alert(`Olá, ${inputElement.value}! Seja bem-vinda(o)!`);
    }
};
