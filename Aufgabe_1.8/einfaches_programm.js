let keepGoing = true

NumbersArray = [];

while (keepGoing) {
    let input = prompt("Geben Sie eine Zahl ein");
    if (!isNaN(input)){
        NumbersArray.push(parseInt(input));
    } else {
        keepGoing = false;
    }
}

if (!keepGoing){
    let sum = 0;
    for (let i = 0; i < NumbersArray.length; i++) {
        sum += NumbersArray[i];
    }

    alert("Die Summe der eingegebenen Zahlen ist: " + sum);
}