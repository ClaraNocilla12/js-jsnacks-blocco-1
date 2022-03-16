let n1 = prompt("inserisci primo numero");
let n2 = prompt("inserisci secondo numero");

if (n1 > n2) {
    document.getElementById("container").innerHTML = `${n1}`
} else {
    document.getElementById("container").innerHTML = `${n2}`
}