// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
console.log(soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ["arroz", "feijão", "ovo"];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é iguarie l a variável `myvar` (testando também o tipo).
console.log(soma == myvar);
console.log(soma === myvar);

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log(myvar <= soma);

// Crie as variáveis necessárias para o cadastro de um cidadão, ao final imprima as informações digitadas em um unico texto
var cidadao = {
    nome: "",
    idade: "",
    sexo: "",
};
cidadao.nome = "João";
cidadao.idade = 18;
cidadao.sexo = "Masculino";
console.log(
    `${cidadao.nome} tem ${cidadao.idade} anos e é do sexo ${cidadao.sexo}`
);

// Faça as 4 operações matemáticas com duas variáveis.
var num1 = 5;
var num2 = 2;
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} X ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(a, b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var res = somar(2, 42);
res += 5;

// Qual o valor atualizado dessa variável?
console.log(res);

// Declare uma nova variável, sem valor.
var valor;

/*
    Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
    Onde VALOR é o novo valor da variável.
*/
function funcao() {
    return 5;
}
valor = funcao();
console.log(`O valor da variável agora é ${valor}`);

// Invoque a função criada acima.
console.log(funcao());

// Qual o retorno da função? (Use comentários de bloco).
/*
    A função retornará o valor 5
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function myFunction(a, b, c) {
    if (a == undefined || b == undefined || c == undefined) {
        return "Preencha todos os valores corretamente!";
    } else {
        return a * b * c + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(myFunction(1, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O resultado será Undefined

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(myFunction(1, 1, 1));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O resultado será 3

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
*/

function tresArgs(a, b, c) {
    if ((a, b, c)) {
        return (a + b) / c;
    } else if ((a, b)) {
        return a + b;
    } else if (a) {
        return a;
    } else {
        return false;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(tresArgs(1)); // retorna 1
console.log(tresArgs(1, 2)); // retorna 3
console.log(tresArgs()); // retorna false
console.log(tresArgs(1, 1, 1)); // retorna 2
