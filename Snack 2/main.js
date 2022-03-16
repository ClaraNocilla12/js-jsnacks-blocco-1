let parola1 = prompt("inserisci prima parola");
let parola2 = prompt("inserisci seconda parola");




if (parola1.length > parola2.length) {
    document.getElementById("container").innerHTML = `${parola1}`;
} else if (parola1.length < parola2.length) {
    document.getElementById("container").innerHTML = `${parola2}`;
} else {
    document.getElementById("container").innerHTML = `Le parole hanno la stessa lunghezza`;
}