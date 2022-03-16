let i;
let number;
let somma=0;;


for(i=0; i<10; i++){
    
    number=parseInt(prompt("dammi il numero"));
    somma += number;
}




document.getElementById("container").innerHTML = `${somma}`;