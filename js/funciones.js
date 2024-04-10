function ocultarParrafos(){
    let obj = document.getElementById("bloque2")
    let lista = obj.getElementsByTagName('p')
    for (let parrafos of lista)
        parrafos.style.display = "none";    
}