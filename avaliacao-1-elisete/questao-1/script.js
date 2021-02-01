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

/* Função para calcular a Tabuada */
function tabuada() {
    if (isValid()) {
        var res = newElement('ul');
        var txt = '';
        for (var i = 0; i <= 5; i++) {
            txt += `<li>Multiplicação: ${number.value} x ${i} = ${number.value * i} | Soma: ${number.value} + ${i} = ${parseInt(number.value) + i}</li>`;
        }

        res.innerHTML = txt;
        result.appendChild(res);
    }
}

/* Função para limpar o input */
function cleanInput() {
    number.value = '';
}

/* Função para limpar a tabuada */
function cleanResult() {
    result.innerHTML = '';
}

/* Função para verificar se o input foi preenchido */
function isValid() {
    if (number.value == '') {
        alert('Preencha os campos corretamente!');
        return false;
    } else {
        return true;
    }
}

// Selecionado a <div id="app"></div>, do HTML
var app = window.document.getElementById('app');

// Criação do label
var lblNumber = newElement('label');
newAtribute(lblNumber, 'for', 'inputNumber');

lblNumber.innerHTML = 'Tabuada do:';

// Criação do input do tipo número
var number = newElement('input');
newAtribute(number, 'type', 'number');
newAtribute(number, 'id', 'inputNumber');

// Criação do botão
var btnRes = newElement('button');

btnRes.innerHTML = 'Calcular';
btnRes.onclick = function () {
    cleanResult();
    tabuada();
    cleanInput();
}

// Criação elemento que recebe a tabuada
var result = newElement('div');

// Colocando os elementos no APP
app.appendChild(lblNumber);
app.appendChild(number);
app.appendChild(btnRes);
app.appendChild(result);
