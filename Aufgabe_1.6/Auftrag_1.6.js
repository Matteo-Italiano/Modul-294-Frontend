const name = prompt('Wie hessit du?')

let Uhrzeit = new Date().getHours();

if (Uhrzeit < 10) {
    console.log('Guten Morgen ' + name);
} else if (Uhrzeit < 16) {
    console.log('Guten Tag ' +  name);
} else if (Uhrzeit < 20) {
    console.log('Guten Abend ' + name);
} else {
    console.log('Gute Nacht ' + name);
}