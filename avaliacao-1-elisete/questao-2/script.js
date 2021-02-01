/* Função para criação de elemento. Ele recebe como parâmetro uma string com o tipo de elemento, e retorna 
window.document.createElement('elemento')
ex.: newElement('div'); << retorna um elemento div>> */
function newElement(element) {
    return window.document.createElement(element);
}

/* Função para definir atributos do elemento. Ele recebe como parâmetro:
  1 - a variável do elemento que foi criado
  2 - o tipo de atributo <<string>>
  3 - o valor do atributo <<string>>
  ex.: var number = newElement('input'); << number recebe um elemento do tipo input>>
       newAtribute(number,'type','number') << o input será do tipo número
  */
function newAtribute(element, atribute, value) {
    return element.setAttribute(atribute, value);
}

// Função para acrescentar nova linha na tabela
function newLine() {
    if (isValid()) {
        var newLine = newElement('tr');

        var name = newElement('td');
        var txtName = inputName.value;
        name.innerHTML = txtName;

        name.style.border = '1px solid #E9E6FF';
        name.style.textAlign = 'center';

        var turma = newElement('td');
        turma.innerHTML = inputClass.value;

        turma.style.border = '1px solid #E9E6FF';
        turma.style.textAlign = 'center';

        var disciplina = newElement('td');
        disciplina.innerHTML = inputComponent.value;

        disciplina.style.border = '1px solid #E9E6FF';
        disciplina.style.textAlign = 'center';

        var nota = newElement('td');
        nota.innerHTML = inputNota.value;

        nota.style.border = '1px solid #E9E6FF';
        nota.style.textAlign = 'center';

        var acao = newElement('td');

        acao.style.border = '1px solid #E9E6FF';
        acao.style.textAlign = 'center';

        var btnDetails = newElement('button');
        btnDetails.innerHTML = 'Detalhes';

        acao.appendChild(btnDetails);

        btnDetails.style.backgroundColor = '#775253';
        btnDetails.style.borderRadius = '1vh';
        btnDetails.style.boxShadow = '2px 2px 0px black';
        btnDetails.style.fontSize = '3vh';
        btnDetails.style.padding = '5px';
        btnDetails.style.width = '8vw';

        newLine.appendChild(name);
        newLine.appendChild(turma);
        newLine.appendChild(disciplina);
        newLine.appendChild(nota);
        newLine.appendChild(acao);

        table.appendChild(newLine);
        clearInput();
    }
}

// Função que limpa os inputs apos criar nova linha na tabela
function clearInput() {
    inputName.value = '';
    inputClass.value = '';
    inputComponent.value = '';
    inputNota.value = '';
}

// Função que verifica se todos os campos foram preenchidos
function isValid() {
    if (inputName.value == '' || inputClass.value == '' || inputComponent.value == '' || inputNota.value == '') {
        alert('Preencha os campos corretamente!');
        return false;
    } else {
        return true;
    }
}

// Selecionando body
var body = window.document.querySelector('body');
body.style.backgroundColor = '#13262F';

// Selecionado a <div id="app"></div>, do HTML
var app = window.document.getElementById('app');

// Título da Página
var title = newElement('h1');
title.style.fontFamily = 'monospace';
title.style.fontSize = '5vh';
title.style.textAlign = 'center';

title.innerHTML = 'Cadastramento de Notas';

// Criando input Nome Completo
var inputName = newElement('input');
newAtribute(inputName, 'type', 'text');
newAtribute(inputName, 'placeHolder', 'Nome Completo');

inputName.style.fontSize = '3vh';
inputName.style.width = '15vw';
inputName.style.marginRight = '1vw';

// Criando input Turma
var inputClass = newElement('input');
newAtribute(inputClass, 'type', 'text');
newAtribute(inputClass, 'placeHolder', 'Turma');

inputClass.style.fontSize = '3vh';
inputClass.style.width = '15vw';
inputClass.style.marginRight = '1vw';

// Criando input Componente
var inputComponent = newElement('input');
newAtribute(inputComponent, 'type', 'text');
newAtribute(inputComponent, 'placeHolder', 'Componente');

inputComponent.style.fontSize = '3vh';
inputComponent.style.width = '15vw';
inputComponent.style.marginRight = '1vw';

// Criando input Nota
var inputNota = newElement('input');
newAtribute(inputNota, 'type', 'number');
newAtribute(inputNota, 'placeHolder', 'Nota Final');

inputNota.style.fontSize = '3vh';
inputNota.style.width = '15vw';
inputNota.style.marginRight = '1vw';

// Criando botão Salvar Nota Aluno
var btnSalvar = newElement('button');
btnSalvar.onclick = function () {
    newLine();
}

btnSalvar.innerHTML = 'Salvar';

btnSalvar.style.backgroundColor = '#5A9367';
btnSalvar.style.borderRadius = '1vh';
btnSalvar.style.boxShadow = '2px 2px 0px black';
btnSalvar.style.fontSize = '3vh';
btnSalvar.style.padding = '5px';
btnSalvar.style.width = '10vw';

// Criando tabela
var table = newElement('table');

table.style.border = '1px solid #E9E6FF';
table.style.color = '#E9E6FF';
table.style.fontSize = '3vh';
table.style.margin = '5vh auto';

// Criando linha tabela
var line = newElement('tr');

// Criando títulos tabela
var nomeAluno = newElement('th');
nomeAluno.innerHTML = "Nome do Aluno";

nomeAluno.style.padding = '0 1vw';
nomeAluno.style.border = '1px solid #E9E6FF';

var turma = newElement('th');
turma.innerHTML = 'Turma';

turma.style.padding = '0 1vw';
turma.style.border = '1px solid #E9E6FF';

var componente = newElement('th');
componente.innerHTML = 'Componente';

componente.style.padding = '0 1vw';
componente.style.border = '1px solid #E9E6FF';

var notaFinal = newElement('th');
notaFinal.innerHTML = "Nota Final";

notaFinal.style.padding = '0 1vw';
notaFinal.style.border = '1px solid #E9E6FF';

var actions = newElement('th');
actions.innerHTML = "Actions";

actions.style.padding = '0 1vw';
actions.style.border = '1px solid #E9E6FF';

// Coocando títulos na linha
line.appendChild(nomeAluno);
line.appendChild(turma);
line.appendChild(componente);
line.appendChild(notaFinal);
line.appendChild(actions);

// Colocando elementos na tabela
table.appendChild(line);

// Colocando os elementos no APP
app.appendChild(title);
app.appendChild(inputName);
app.appendChild(inputClass);
app.appendChild(inputComponent);
app.appendChild(inputNota);
app.appendChild(btnSalvar);
app.appendChild(table);