'use strict'

let elso = document.getElementById('elso');
let masodik = document.getElementById('masodik');


function osszead() {
    document.getElementById('eredmeny').value = +elso.value + +masodik.value;
}
function kivon() {
    document.getElementById('eredmeny').value = +elso.value - +masodik.value;
}
function szoroz() {
    document.getElementById('eredmeny').value = +elso.value * +masodik.value;
}
function oszt() {
    document.getElementById('eredmeny').value = +elso.value / +masodik.value;
}
