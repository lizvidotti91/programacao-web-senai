// Função que seleciona um elemento do documento HTML
// getElement('div') --> seleciona um elemento <div></div>
// getElement('.div') --> seleciona um elemento com class name div <div class='div'></div>
// getElement('#div') --> seleciona um elemento de ID div <div id='div'></div>
function getElement(element) {
    return window.document.querySelector(element);
}

// Função que cria um novo elemento HTML
// newElement('div') --> criar um elemento <div></div>
function newElement(element) {
    return window.document.createElement(element);
}

// Ao clicar no botão para o modo de dois jogadores, ele deixa a <div class="home"></div> invisível na tela e a <div class="player"></div> ativa, ao trocar o nome da classe para "player active"
function twoPlayer() {
    getElement('.home').className = 'home hidden';
    getElement('.player').className = 'player active';
}

// Ao clicar no botão para o modo de jogo contra o computador, ele faz o mesmo processo da função twoPlayer(), a não ser em trocar o nome da classe para "player-pc active"
function pcPlayer() {
    getElement('.home').className = 'home hidden';
    getElement('.player').className = 'player-pc active';
}

// Selecionado os botões + 1, + 2 e + 3 do documento HTML e armazenando em variáveis
var btn1 = getElement('.btn-1');
var btn2 = getElement('.btn-2');
var btn3 = getElement('.btn-3');

// Ao clicar nos botões + 1, + 2 ou + 3, o valor do botão é passado como parâmetro para a função clickButton()
function clickBtn1() {
    clickButton(parseInt(btn1.value));
}

function clickBtn2() {
    clickButton(parseInt(btn2.value));
}

function clickBtn3() {
    clickButton(parseInt(btn3.value));
}

// Criação da variável res, que será nossa contadora. Ao clicar no botão, é selecionado o valor da <div class="answer"></div> e somada à variável res. Para que seja a vez do próximo jogador, é feita uma verificação do valor da soma. Se ela é menor do que 21, é passada a vez para o próximo jogador
var res = 0;
function clickButton(value) {
    res += value
    getElement('.answer').innerHTML = res;
    if (isPc()) { // verificar se o jogo está no modo dois jogadores ou versus computador
        if (!isWinner()) { // verifica se o valor armazenado na <div class="answer"></div> é menor do que 21
            changePlayerPc()
            setTimeout('pcMove()', 1000);
        } else {
            buttonDisabled(); // função para desabilitar os botões e não somar mais no jogo
        }
    } else {
        if (!isWinner()) {
            changePlayer2();
        } else {
            buttonDisabled(); // função para desabilitar os botões e não somar mais no jogo
        }
    }
}

// Para verificar se o jogo está no modo versus computador. É verificado se o elemento <div class="player-pc"></div> está ativo no HTML
function isPc() {
    if (getElement('.player-pc')) {
        return true;
    }
}

// Para simular a jogada do computador, é feita a escolha de um número aleatório de 1 a 3, e soma-se ao valor da <div class="answer"></div>
function pcMove() {
    var move = Math.floor(Math.random() * 3) + 1;
    res += move;
    getElement('.answer').innerHTML = res;
    if (!isWinner()) {
        setTimeout('changePlayerPc()', 1000); // a função setTimeout() atrasa o início das funções, para que possamos ver o movimento da jogada do computador
    }
}

// Troca o título de Jogador 1 para Computador e vice-versa
function changePlayerPc() {
    var player = getElement('.play-time');
    if (player.innerText == 'Jogador 1') {
        player.innerHTML = 'Computador';
    } else {
        player.innerHTML = 'Jogador 1';
    }
}

// Troca o título de Jogador 1 para Jogador 2 e vice-versa
function changePlayer2() {
    var player = getElement('.play-time');
    if (player.innerText == 'Jogador 1') {
        player.innerHTML = 'Jogador 2';
    } else {
        player.innerHTML = 'Jogador 1';
    }
}

// Verificar se o valor armazenado na <div class="answer"></div> é maior ou igual a 21. Sendo verdadeiro, é exibida a mensagem que o jogador ganhou o jogo. Então o ponto fica armazenado para ser exibido no ranking
function isWinner() {
    var player = getElement('.play-time').innerText;
    var score = getElement('.answer').innerText;
    if (parseInt(score) == 21) {
        getElement('.answer').innerHTML = ` ${score} <br> ${player} venceu!`;
        getPoint();
        showButton();
        return true;
    } else if (parseInt(score) > 21) {
        if (isPc()) {
            changePlayerPc();
            var player = getElement('.play-time').innerText;
            getElement('.answer').innerHTML = ` ${score} <br> ${player} venceu!`;
            getPoint();
            showButton();
            return true;
        } else {
            changePlayer2();
            var player = getElement('.play-time').innerText;
            getElement('.answer').innerHTML = ` ${score} <br> ${player} venceu!`;
            getPoint();
            showButton();
            return true;
        }
    }
}

function buttonDisabled() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}

// Função para contabilizar os pontos do ranking
var winPlay1 = 0;
var lostPlay1 = 0;
var winPlay2 = 0;
var lostPlay2 = 0;
var winPlaypc = 0;
var lostPlaypc = 0;
function getPoint() {
    var player = getElement('.play-time').innerText;
    if (player == 'Jogador 1') {
        winPlay1 += 1;
        if (isPc()) {
            lostPlaypc += 1;
        } else {
            lostPlay2 += 1;
        }
    } else if (player == 'Jogador 2') {
        winPlay2 += 1;
        lostPlay1 += 1;
    } else {
        winPlaypc += 1;
        lostPlay1 += 1;
    }
}

// Ao clicar no botão com o ícone de troféu, é exibido o ranking com o número de vitórias e derrotas
// Ao clicar no botão página inicial, o ranking é reiniciado
function showRanking() {
    getElement('.ranking').className = 'ranking active';
    var namePlayer1 = 'Jogador 1';
    var pointPlayer1 = winPlay1;
    var pointLostPlayer1 = lostPlay1;

    if (isPc()) {
        var namePlayer2 = 'Computador';
        var pointPlayer2 = winPlaypc;
        var poinLostPlayer2 = lostPlaypc;
    } else {
        var namePlayer2 = 'Jogador 2';
        var pointPlayer2 = winPlay2;
        var poinLostPlayer2 = lostPlay2;
    }
    getElement('.ranking').innerHTML = `
        <table>
            <tr>
                <th></th>
                <th>${namePlayer1}</th>
                <th>${namePlayer2}</th>
            </tr>
            <tr>
                <td>Vitórias</td>
                <td>${pointPlayer1}</td>
                <td>${pointPlayer2}</td>
            </tr>
            <tr>
                <td>Derrotas</td>
                <td>${pointLostPlayer1}</td>
                <td>${poinLostPlayer2}</td>
            </tr>
        <table>
        <button class="btn-home rules" onclick="hideRanking()">Voltar</button>
    `;
}

// Clicando no botão voltar, quando é exibido o ranking, este elemento se torna invisível na tela
function hideRanking() {
    getElement('.ranking.active').className = 'ranking';
}

// Ao terminar uma partida, são exibidos os botões Página Inicial e Jogar Novamente
// Ao clicar em página inicial, o ranking é reiniciado
// Ao clicar em jogar novamente, o ranking continua sendo contabilizado, até que se atualize a página ou clique no botão Página Inicial
function showButton() {
    getElement('.options-final').className = 'options-final active';
}

// Ao clicar no botão regras, na página inicial, são exibidas as regras principais
function showRules() {
    getElement('.home').className = 'home hidden';
    getElement('.game-rules').className = 'game-rules active';
}

// A clicar no botão boltar, quando são exibidas as regras do jogo, as regras se tornas invisíveis novamente
function hideRules() {
    getElement('.home.hidden').className = 'home';
    getElement('.game-rules.active').className = 'game-rules';
}

// Ao clicar no botão Jogue novamente, a <div class="answer"></div> é reiniciada e um novo jogo é recomeçado. O ranking continua sendo contabilizado
function realoadGame() {
    getElement('.answer').innerHTML = 0;
    getElement('.play-time').innerHTML = 'Jogador 1';
    getElement('.options-final.active').className = 'options-final';
    res = 0;

    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
}