type Salary = number | string

type Programmer = {
    name: string, 
    age: number, 
    skills?: string[],
    contact: {email: string, phone: string},
    salary?: Salary
}

export function showProgrammer(programmer: Programmer){
    console.log(programmer)
}

showProgrammer({name: "Bibi tito", age: 21, contact: {email: 'bibi@gmail.com', phone: '101010'}})