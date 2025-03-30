var doce = "A escolher";
let dinheiro = 0;

function setText() {

    var painel = document.getElementById("painel");
    painel.innerHTML = "Doce: " + doce + "<br> Dinheiro: R$" + dinheiro + ",00";

}

function setDoce(letra) {

    doce = letra;
    console.log(doce);
    setText();

}

function addDinheiro(numero) {

    dinheiro += parseInt(numero);
    if (dinheiro > 10) {
        dinheiro = 10;
    }
    console.log(dinheiro);
    setText();

}

function resetDinheiro() {

    dinheiro = 0;
    console.log(dinheiro);
    setText();

}

function showTroco(valor) {

    var rUm = document.getElementsByClassName("r-um");
    var rDois = document.getElementsByClassName("r-dois");
    
    switch (dinheiro) {

        case valor+1:
            console.log 
            rUm[0].classList.add("visible");
            break;

        case valor+2:
            rDois[0].classList.add("visible");
            break;

        case valor+3:
            rUm[0].classList.add("visible");
            rDois[1].classList.add("visible");
            break;

        case valor+4:
            rDois[0].classList.add("visible");
            rDois[1].classList.add("visible");
            break;

    }

}


function resetGame() {

    window.location.reload();

}

function comprar() {

    var painel = document.getElementById("painel");
    var doceA = document.getElementById("doce-a");
    var doceB = document.getElementById("doce-b");
    var doceC = document.getElementById("doce-c");

    switch (doce) {

        case 'A':

            if (dinheiro >= 6) {

                doceA.classList.add("animation-doces");
                painel.innerHTML = "Compra realizada!";

                showTroco(6);

                setTimeout(() => {
                    setDoce("A escolher");
                    resetDinheiro();
                }, 3000);

            } else if (dinheiro < 6) {

                painel.innerHTML = "Saldo insuficiente!";
                setTimeout(setText, 3000);

            }

            break;

        case 'B':
            if( dinheiro >= 7) {

                doceB.classList.add("animation-doces");
                painel.innerHTML = "Compra realizada!";

                showTroco(7);

                setTimeout(() => {
                    setDoce("A escolher");
                    resetDinheiro();
                }, 3000);

            } else if (dinheiro < 7) {

                painel.innerHTML = "Saldo insuficiente!";
                setTimeout(setText, 3000);

            }
            break;

        case 'C':
            if (dinheiro >= 8) {

                doceC.classList.add("animation-doces");
                painel.innerHTML = "Compra realizada!";

                showTroco(8);

                setTimeout(() => {
                    setDoce("A escolher");
                    resetDinheiro();
                }, 3000);

            } else if (dinheiro < 8) {

                painel.innerHTML = "Saldo insuficiente!";
                setTimeout(setText, 3000);

            }
            break;

    }

}