//let logType: string = 'info'
//logType = 'warn'

//let logType: 'info'
type logType = 'info' | 'warn' | 'error'
export function logger(type: logType, message: string){
    switch(type){
        case 'info':
            console.log(`info: ${message} `);
            break
        case 'warn':
            console.warn(`Warn: ${message}`)
            break
        case 'error':
            console.error(`Error: ${message}`)
            break
    }
}

logger('warn', 'Log com alguma informação sobre o que houve!')

