const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
var copiar = document.querySelector(".btn-copiar");
var itens = document.querySelector(".itens")


//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"


function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    mensagem.value = textEncriptado;
    textArea.value = "";

    mensagem.style.display = "block";
    copiar.style.display = 'block';
    itens.style.display = 'none'; 
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textdesencriptado = desencriptar(textArea.value);
    mensagem.value = textdesencriptado;
    textArea.value = "";

    mensagem.style.display = "block";
    copiar.style.display = 'block';
    itens.style.display = 'none';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    var textocopiado = mensagem.value;
  
	navigator.clipboard.writeText(textocopiado);

    
}