"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(a, b) {
    console.log('dentro do escopo de modulo');
    return { result: a + b };
}
