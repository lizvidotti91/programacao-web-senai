// RESET DO CSS
var body = window.document.querySelector('body');

body.style.margin = 0;
body.style.padding = 0;

// CHAMANDO O ELEMENTO PRINCIPAL DO HTML, ONDE SERÁ INSERIDO O CONTEÚDO
var app = window.document.querySelector('div.app');

app.style.backgroundColor = '#2b2d42';
app.style.height = "100vh";
app.style.width = '100vw';

// CRIANDO ELEMENTOS DO CAMPO DE FORMULÁRIO
var container = window.document.createElement('div');
var inputTime = window.document.createElement('input');
var linkTime = window.document.createElement('input');
var inputVitoria = window.document.createElement('input');
var inputDerrota = window.document.createElement('input');
var inputEmpate = window.document.createElement('input');
var btnAdicionar = window.document.createElement('button');
var btnLimpar = window.document.createElement('button');

// DIV CONTAINER
container.setAttribute('class', 'container');

container.style.display = 'flex';

// INPUT TIME
inputTime.setAttribute('type', 'text');
inputTime.setAttribute('id', 'time');
inputTime.setAttribute('name', 'time');
inputTime.setAttribute('placeholder', 'nome do time');

inputTime.style.fontSize = '20px';
inputTime.style.height = '30px';
inputTime.style.margin = '10vh 3vw 2vh 5vw';
inputTime.style.width = '200px';

// LINK TIME
linkTime.setAttribute('type', 'text');
linkTime.setAttribute('id', 'link');
linkTime.setAttribute('name', 'link');
linkTime.setAttribute('placeholder', 'site oficial do time');

linkTime.style.fontSize = '20px';
linkTime.style.height = '30px';
linkTime.style.margin = '10vh 3vw 2vh 0vw';
linkTime.style.width = '200px';

// INPUT VITORIA
inputVitoria.setAttribute('type', 'number');
inputVitoria.setAttribute('id', 'vitoria');
inputVitoria.setAttribute('name', 'vitoria');
inputVitoria.setAttribute('placeholder', 'quantidade de vitórias');

inputVitoria.style.fontSize = '20px';
inputVitoria.style.height = '30px';
inputVitoria.style.margin = '10vh 3vw 2vh 0vw';
inputVitoria.style.width = '200px';

// INPUT DERROTA
inputDerrota.setAttribute('type', 'number');
inputDerrota.setAttribute('id', 'derrota');
inputDerrota.setAttribute('name', 'derrota');
inputDerrota.setAttribute('placeholder', 'quantidade de derrotas');

inputDerrota.style.fontSize = '20px';
inputDerrota.style.height = '30px';
inputDerrota.style.margin = '10vh 3vw 2vh 0vw';
inputDerrota.style.width = '250px';

// INPUT EMPATE
inputEmpate.setAttribute('type', 'number');
inputEmpate.setAttribute('id', 'empate');
inputEmpate.setAttribute('name', 'empate');
inputEmpate.setAttribute('placeholder', 'quantidade de empates');

inputEmpate.style.fontSize = '20px';
inputEmpate.style.height = '30px';
inputEmpate.style.margin = '10vh 3vw 2vh 0vw';
inputEmpate.style.width = '250px';


// BOTAO ADICIONAR
btnAdicionar.setAttribute('type', 'submit');
btnAdicionar.setAttribute('class', 'btn');

btnAdicionar.innerHTML = 'Adicionar Time';

btnAdicionar.style.backgroundColor = '#008000';
btnAdicionar.style.fontSize = '20px';
btnAdicionar.style.height = '30px';
btnAdicionar.style.margin = '1vh 2vw 5vh 5vw';
btnAdicionar.style.width = '200px';

btnAdicionar.onclick = function () {
    adicionaLinha();
    limparForm();
}

// BOTAO LIMPAR
btnLimpar.setAttribute('type', 'reset');
btnLimpar.setAttribute('class', 'btn');

btnLimpar.innerHTML = 'Limpar Formulário';

btnLimpar.style.backgroundColor = '#ff0000';
btnLimpar.style.fontSize = '20px';
btnLimpar.style.height = '30px';
btnLimpar.style.width = '200px';

btnLimpar.onclick = function () {
    limparForm();
}

// ADICIONANDO ELEMENTOS NO HTML
container.appendChild(inputTime);
container.appendChild(linkTime);
container.appendChild(inputVitoria);
container.appendChild(inputDerrota);
container.appendChild(inputEmpate);

app.appendChild(container);
app.appendChild(btnAdicionar);
app.appendChild(btnLimpar);

// FUNÇÕES
function adicionaLinha() {
    var newLine = window.document.createElement('tr');
    var item1 = window.document.createElement('td');
    var item2 = window.document.createElement('td');
    var item3 = window.document.createElement('td');
    var item4 = window.document.createElement('td');
    var item5 = window.document.createElement('td');
    var item6 = window.document.createElement('td');

    if (inputTime.value == '' || linkTime.value == '' || inputVitoria.value == '' || inputDerrota.value == '' || inputEmpate.value == '') {
        window.alert('Existem campos sem preenchimento!');
    } else {
        var nome = inputTime.value;

        var link = `<a style="color: white" href="${linkTime.value}" target="blank"> ${linkTime.value} </a>`;
        var vitoria = inputVitoria.value;
        var derrota = inputDerrota.value;
        var empate = inputEmpate.value;

        var calculo = (vitoria * 3) + (empate * 1);
        console.log(calculo);

        item1.innerHTML = nome;
        item1.style.color = 'white';
        item1.style.fontFamily = 'Arial';
        item1.style.fontSize = '3vh';
        item1.style.paddingTop = '2vh';

        item2.innerHTML = link;
        item2.style.color = 'white';
        item2.style.fontFamily = 'Arial';
        item2.style.fontSize = '3vh';
        item2.style.paddingTop = '2vh';

        item3.innerHTML = vitoria;
        item3.style.color = 'white';
        item3.style.fontFamily = 'Arial';
        item3.style.fontSize = '3vh';
        item3.style.paddingTop = '2vh';

        item4.innerHTML = derrota;
        item4.style.color = 'white';
        item4.style.fontFamily = 'Arial';
        item4.style.fontSize = '3vh';
        item4.style.paddingTop = '2vh';

        item5.innerHTML = empate;
        item5.style.color = 'white';
        item5.style.fontFamily = 'Arial';
        item5.style.fontSize = '3vh';
        item5.style.paddingTop = '2vh';

        item6.innerHTML = calculo;
        item6.style.color = 'white';
        item6.style.fontFamily = 'Arial';
        item6.style.fontSize = '3vh';
        item6.style.paddingTop = '2vh';

        newLine.appendChild(item1);
        newLine.appendChild(item2);
        newLine.appendChild(item3);
        newLine.appendChild(item4);
        newLine.appendChild(item5);
        newLine.appendChild(item6);

        table.appendChild(newLine);
    }
}

function limparForm() {
    inputTime.value = '';
    linkTime.value = '';
    inputVitoria.value = '';
    inputDerrota.value = '';
    inputEmpate.value = '';
}