const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`
function buttonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptacion){
    let mtxCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptacion = stringEncriptacion.toLowerCase()
    for(let i=0;i<mtxCodigo.length;i++){
        if(stringEncriptacion.includes(mtxCodigo[i][0])){
            stringEncriptacion = stringEncriptacion.replaceAll(mtxCodigo[i][0],mtxCodigo[i][1])

        }
    }
    return stringEncriptacion;
}

function buttonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptacion){
    let mtxCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptacion = stringDesencriptacion.toLowerCase()
    for(let i=0;i<mtxCodigo.length;i++){
        if(stringDesencriptacion.includes(mtxCodigo[i][1])){
            stringDesencriptacion = stringDesencriptacion.replaceAll(mtxCodigo[i][1],mtxCodigo[i][0])

        }
    }
    return stringDesencriptacion;
}