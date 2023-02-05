// carne - 400g pessoa + 6hrs - 650
// cerveja - 1200 ml/adulto + 6hrs - 2000ml
// refri - 1000ml/pessoa +  6hrs - 1500ml
let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");
let resolute = document.getElementById("resolute");

function calcular(){
    let adults = parseInt(inputAdults.value);
    let children = parseInt(inputChildren.value);
    let duration = parseInt(inputDuration.value);
    if(duration<6){
        var steak = ((adults+(children/2))*400)/1000;
        var beer = Math.ceil((adults*1200)/350);
        var soda = Math.ceil(((adults+(children/2))*1000)/2000);
        resolute.innerHTML = `<p>${steak}Kg de Carne<p/>`;
        resolute.innerHTML += `<p> ${beer} latas de cerveja`
        resolute.innerHTML += `<p> ${soda} refrigerantes`
    }
    else{
        var steak = ((adults+(children/2))*650)/1000;
        var beer = Math.ceil((adults*2000)/350);
        var soda = Math.ceil(((adults+(children/2))*1500)/2000);
        resolute.innerHTML = `<p>${steak}Kg de Carne<p/>`;
        resolute.innerHTML += `<p> ${beer} latas de cerveja`
        resolute.innerHTML += `<p> ${soda} refrigerantes`
    }

    if(duration <= 0){
        resolute.innerHTML = `<p> A duração (${duration} hora(s)) é inválida.<p/>`;
    }

}

