let films: string[] = ["Duna: Parte 2", 'Divertida Mente 2']
//let numbers: number[] = [10,20,30]

//let films: Array<string> = ["Duna: Parte 2", 'Divertida Mente 2']
//let numbers: Array<number> = [10,20,30]

export function toUpperCaseStrings(arr: string[]){
    return arr.map(value => value.toUpperCase())
}
console.log(toUpperCaseStrings(films))