//window.alert("Hallo ich bin von JavaScript generiert!");

let schritt = 0;

//console.log(document);

function changeColor(){
    let titel = document.getElementById("titel");
    titel.style.color = "#1eadb7";
    titel.style.fontFamily = "Arial, sans-serif";
    titel.style.fontSize = "80px";
    titel.style.letterSpacing = "0.5rem";
    titel.textContent = "Salliiii";


    //console.log(title);
}

function create(){
    let element = document.createElement("div");
    element.textContent = "Neues Element!";
    document.body.appendChild(element);

    element.style.color = "#5b1eb7";
    element.style.fontSize = "60px";
}