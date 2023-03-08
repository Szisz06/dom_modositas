window.addEventListener("load", init)

function init(){
    const LISTA = ["zene", "tánc"];
    const FELSOROLAS =document.getElementsByClassName("felsorolas"[0]);
    const masik = document.getElementsByClassName("masik");
    let htmlValtozo = listakiir(LISTA);
    let htmlValtozo1 = divKiir(LISTA);
    kiir(htmlValtozo, FELSOROLAS);
    kiir(htmlValtozo1, masik [0]); 
    const gombelemek = document.querySelectorAll(".masik button");
    for (let index = 0; index < LISTA.length; index++) {
        gombelemek[index].addEventListener("click", divHatter);
        
    }
}


function listakiir(LISTA){
    let htmlValtozo = "<ul>";
    for(let index = 0; index < LISTA.length; index++){
        htmlValtozo+= "<li>" + LISTA[index] + "</li>";
    }
    htmlValtozo += "</ul>";
  
    return htmlValtozo;
}

function kiir(mit, hova){
    hova.innerHTML += mit;
}

function klikkeles(event){
    tartalom = elevent.target.innerHTML;
    console.log
}

function divKiir(LISTA){
    let htmlValtozo = "";
    for (let index = 0; index < LISTA.length; index++) {
        htmlValtozo += `<div> <p> ${LISTA[index]} </p> <button> ok </button> </div>`;
    }
    htmlValtozo += "";

    return htmlValtozo;
}

function divHatter(event){
    const ELEM = event.target.parentNode
    ELEM.classList.add("hatter")
    console.log(event.target.parentNode)


}

