let n1 = prompt("inserisci primo numero");
let n2 = prompt("inserisci secondo numero");

n1=parseInt(n1);
n2 = parseInt(n2);


if (n1 > n2) {
    document.getElementById("container").innerHTML = `${n1}`;
} else if(n2 > n1){
    document.getElementById("container").innerHTML = `${n2}`;
} else{
    document.getElementById("container").innerHTML = `I numeri sono uguali`;
}