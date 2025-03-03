
// skifter i mellem hvad der er synligt
var x = document.getElementById("conta");
var y = document.getElementById("shop404");

function fejl404() {
    if(y.style.display == 'block')
       y.style.display = 'none';
    else
       y.style.display = 'block';
       document.getElementById("shophead").style.backgroundImage = "url('../img/navbarbilleder/fejl404.png')";

    if (y.style.visibility == "none")
        x.style.display = 'block';
    else
        x.style.display = 'none';
}

function pop() {
    alert("Der er desværre ikke mere information at komme efter. For at få mere at vide om os og vores øl så prøv undersiden Om os!");
  }