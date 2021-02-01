function criaElemento(element) {
    return window.document.createElement(element);
    // pode passar um vetor com os atributos do elemento e fazer um for, adicionando o setAttribute do elemento
    // const note = criaElemento('div', ['class','note'])
}

/*  
    Se eu quiser pegar um elemento pelo ID, colocar #elemento
    const name = getElement('#inputName');
    Se eu quiser pegar um elemento pela classe, colocar .elemento
    const name = getElement('.inputName'); 
*/
function getElement(element) { // função para pegar elementos do HTML
    return window.document.querySelector(element);
}