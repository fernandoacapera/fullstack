let programmer = {
    name: 'Fernando',
    age: 21,
    skills: ['JavaScript', 'TypeScripy']
}

export function showProgrammer(programmer: {name: string, age: number, skills?: string[]}){
    console.log(programmer)
}

showProgrammer(programmer)
showProgrammer({name: "Bibi tito", age: 21})