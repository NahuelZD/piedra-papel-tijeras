const btnPiedra = document.querySelector('#btn-piedra');
const btnPapel = document.querySelector('#btn-papel');
const btnTijeras = document.querySelector('#btn-tijeras');

const resultado = document.querySelector('#resultado')
const maquina = document.querySelector('#maquina')
const jugagor = document.querySelector('#jugador')

btnPiedra.addEventListener('click', function () {
    jugagor.innerHTML = 'PIEDRA';
    const usuario = ['PIEDRA', 'PAPEL', 'TIJERAS'];
    let pc = Math.floor(Math.random() * (2 + 1));

    if (btnPiedra.value === usuario[pc]) {
        resultado.innerHTML = 'EMPATE';
        maquina.innerHTML = `${usuario[pc]}`;
    } else {
        if (usuario[pc] === 'PAPEL') {
            resultado.innerHTML = 'PERDISTE';
            maquina.innerHTML = `${usuario[pc]}`;
        } else {
            resultado.innerHTML = 'GANASTE';
            maquina.innerHTML = `${usuario[pc]}`;
        }
    }
});

btnPapel.addEventListener('click', function () {
    jugagor.innerHTML = 'PAPEL';
    const usuario = ['PIEDRA', 'PAPEL', 'TIJERAS'];
    let pc = Math.floor(Math.random() * (2 + 1));

    if (btnPapel.value === usuario[pc]) {
        resultado.innerHTML = 'EMPATE';
        maquina.innerHTML = `${usuario[pc]}`;
    } else {
        if (usuario[pc] === 'TIJERAS') {
            resultado.innerHTML = 'PERDISTE';
            maquina.innerHTML = `${usuario[pc]}`;
        } else {
            resultado.innerHTML = 'GANASTE';
            maquina.innerHTML = `${usuario[pc]}`;
        }
    }
});

btnTijeras.addEventListener('click', function () {
    jugagor.innerHTML = 'TIJERAS';
    const usuario = ['PIEDRA', 'PAPEL', 'TIJERAS'];
    let pc = Math.floor(Math.random() * (2 + 1));

    if (btnTijeras.value === usuario[pc]) {
        resultado.innerHTML = 'EMPATE';
        maquina.innerHTML = `${usuario[pc]}`;
    } else {
        if (usuario[pc] === 'PIEDRA') {
            resultado.innerHTML = 'PERDISTE';
            maquina.innerHTML = `${usuario[pc]}`;
        } else {
            resultado.innerHTML = 'GANASTE';
            maquina.innerHTML = `${usuario[pc]}`;
        }
    }
});




/* function piedraPapelTijeras(user) {
    const piedra = 1;
    const papel = 2;

    let pc = Math.floor(Math.random() * (2 + 1) + 1)

    if(pc === piedra){
        if(user == 'piedra'){
            console.log('Empate')
        } else if( user == 'papel'){
            console.log('Ganaste')
        } else {
            console.log('Perdiste')
        }
    } else if(pc === papel){
        if(user == 'papel'){
            console.log('Empate')
        } else if( user == 'tijeras'){
            console.log('Ganaste')
        } else {
            console.log('Perdiste')
        }
    } else {
        if(user == 'tijeras'){
            console.log('Empate')
        } else if( user == 'piedra'){
            console.log('Ganaste')
        } else {
            console.log('Perdiste')
        }
    }

    console.log(user + ' ' + pc)
}

piedraPapelTijeras(usuario[1]) */