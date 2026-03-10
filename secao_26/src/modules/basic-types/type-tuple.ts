let filmArray: (number | string | boolean)[] = [1, 'Guerra Civil', true]
let filmTuple: [number, string, boolean] = [2, 'Um Lugar Silencioso: Dia Um', false]
let filmTupleOpcionalPosition: [number, string, boolean?] = [2, 'Um Lugar Silencioso: Dia Um', false]

const [idArr, titleArr, availableArr] = filmArray
const [id, title, available] = filmTuple
