"use strict";
/*
let szam = 125;
//hibakereső felület.
console.log(szam);
//DOM (document object model)segitségével
document.getElementById('pelda').innerText = szam;
//BOM(brouser object model) segitségével
// modális ablakban (modal window) jelenik meg.
window.alert(szam);
*/

/*window.confirm moduális függvény, boolean értékkel tér vissza! */
/*
let beenged = window.confirm('Elmúltál már tizennyolc éves?');

if (!beenged < 18) {
    document.getElementById('pelda').innerText = 'Nem mehetsz be, mert kicsi vagy.';
}
else {
    document.getElementById('pelda').innerText = 'Elég nagy vagy, bemehetsz.';
}
*/
/*window.confirm moduális függvény, szövegértékkel (string) tér vissza!*/
/*let beenged = window.prompt('Hány éves vagy', 18);*/

/* Typuskonverzió */
// let kor= Number(beenged);
//let kor = parseInt(beenged);
/*let kor = +beenged;

if( kor < 18){
    document.getElementById('pelda').innerText = 'Nem mehetsz be, mert kicsi vagy.';
}

else {
    document.getElementById('pelda').innerText = 'Elég nagy vagy, bemehetsz';
}
*/
let maiNap = window.prompt('A hét melyik napja van', 1);

let nap = +maiNap;

if(nap == 1) {
    document.getElementById('pelda').innerText = 'A mai nap hétfő';
}
else if(nap == 2) {
    document.getElementById('pelda').innerText = 'A mai nap kedd';
}
else if(nap == 3) {
    document.getElementById('pelda').innerText = 'A mai nap szerda';
}
else if(nap == 4) {
    document.getElementById('pelda').innerText = 'A mai nap csütörtök';
}
else if(nap == 5) {
    document.getElementById('pelda').innerText = 'A mai nap péntek';
}
else if(nap == 6) {
    document.getElementById('pelda').innerText = 'A mai nap szombat';
}
else if(nap == 7) {
    document.getElementById('pelda').innerText = 'A mai nap vasárnap';
}
else {
    document.getElementById('pelda').innerText = 'Nincs ilyen nap a héten';
}