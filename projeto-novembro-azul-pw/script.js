const name = getElement('#input-name');
const email = getElement('#input-email');
const phone = getElement('#input-phone');
const age = getElement('#input-age');

var containerNote = getElement('#container-note');

// limpa formulario especifico para estas variaveis
function limpaFormulario() {
    name.value = '';
    email.value = '';
    phone.value = '';
    age.value = '';
}

function formValido() {
    if (name.value == '' || email.value == '' || phone.value == '' || age.value == '') {
        alert("Campos em branco! Verifique e tente novamente");
        return false;
    } else {
        return true;
    }
}

function idadeValida(age) {
    return age >= 40;
}

function verificaIdade() {
    // if (formValido() == false) {
    //     if (idadeValida(age.value)) {
    //         alert("Encaminhar para exames de rotina específicos com Proctologista");
    //     } else {
    //         alert("Não elegível para realizar exames mais complexos");
    //     }
    // }

    if (formValido())
        idadeValida(age.value) ? alert("Encaminhar para exames de rotina específicos com Proctologista")
            : alert("Não elegível para realizar exames mais complexos");
}

function adicionaPaciente() {
    if (formValido()) {
        var note = criaElemento('div');
        note.setAttribute('class', 'note');

        // Fazer uma função para verificar se a idade precisa fazer o exame
        if (idadeValida(age.value)) {
            var condicao = "Encaminhar para exames de rotina específicos com Proctologista";
            note.style.backgroundColor = ' #006d77';
        } else {
            var condicao = "Não elegível para realizar exames mais complexos";
            note.style.backgroundColor = '#268d26';
        }

        note.innerHTML = `<p><strong>Nome:</strong> ${name.value}</p> <p><strong>Idade:</strong> ${age.value}</p> <p><strong>Condição:</strong> ${condicao}`;
        //console.log(note);

        containerNote.appendChild(note);

        limpaFormulario();
    }
}