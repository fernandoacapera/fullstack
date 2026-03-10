"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProgrammer = showProgrammer;
let programmer = {
    name: 'Fernando',
    age: 21,
    skills: ['JavaScript', 'TypeScripy']
};
function showProgrammer(programmer) {
    console.log(programmer);
}
showProgrammer(programmer);
showProgrammer({ name: "Bibi tito", age: 21 });
