
// skifter i mellem hvad der er synligt til undersiden shop
var x = document.getElementById("conta");
var y = document.getElementById("shop404");

function fejl404() {
    if(y.style.display == 'block')
       y.style.display = 'none';
    else
       y.style.display = 'block';
       document.getElementById("shophead").style.backgroundImage = "url('../img/navbarbilleder/fejl404.webp')";

    if (y.style.visibility == "none")
        x.style.display = 'block';
    else
        x.style.display = 'none';
}

//popup window
function pop() {
    alert("Der er desværre ikke mere information at komme efter. For at få mere at vide om os og vores øl så prøv undersiden Om os!");
}


// Hent elementer
var a = document.getElementById("sp1");
var b = document.getElementById("sp2");
var c = document.getElementById("sp3");

var d = document.getElementById("svar1");
var e = document.getElementById("svar2");
var f = document.getElementById("svar3");
var g = document.getElementById("svar4");

// optæller point for spørgsmål, henholdsivs A B og C.
var scoreA = 0;
var scoreB = 0;
var scoreC = 0;

// Skifter hvad der vises
function skift() {
    a.style.display = 'none';
    b.style.display = 'block';
}
function skift2() {
    b.style.display = 'none';
    c.style.display = 'block';
}
function skift3() {
    c.style.display = 'none';
    end();
}

//tilføjer point
function pointA() {
    scoreA += 1;
}
function pointB() {
    scoreB += 1;
}
function pointC() {
    scoreC += 1;
}

//knapper/svar for at skifte side og give point på samme tid
function ga() { skift(); pointA(); }
function ga2() { skift(); pointB(); }
function ga3() { skift(); pointC(); }

function gb() { skift2(); pointA(); }
function gb2() { skift2(); pointB(); }
function gb3() { skift2(); pointC(); }

function gc() { skift3(); pointA(); }
function gc2() { skift3(); pointB(); }
function gc3() { skift3(); pointC(); }

// Tjek hvilket svar der skal vises
function end() {
    let x = 1; // Score skal være over 0 for at vise et svar

    if (scoreA > x) {
        e.style.display = 'block'; // scoreA vinder (pilsner)
    } else if (scoreB > x) {
        f.style.display = 'block'; // scoreB vinder (classic)
    } else if (scoreC > x) {
        d.style.display = 'block'; // scoreC vinder (IPA)
    } else {
        g.style.display = 'block'; // Hvis ingen score er høj nok (alle tre)
    }
}

