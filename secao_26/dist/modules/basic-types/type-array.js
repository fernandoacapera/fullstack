"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCaseStrings = toUpperCaseStrings;
let films = ["Duna: Parte 2", 'Divertida Mente 2'];
//let numbers: number[] = [10,20,30]
//let films: Array<string> = ["Duna: Parte 2", 'Divertida Mente 2']
//let numbers: Array<number> = [10,20,30]
function toUpperCaseStrings(arr) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films));
