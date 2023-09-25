let userInput: unknown;
let userName: string

userInput = 5;
userInput = 'just'
// userName = userInput // this throws an error because user input is not guaranteed to be string

let userInput1: any
let userName1:string

userInput1= 4
userName1 = userInput1 // this doesnt throw and error because ts disables type check with the any type

function generateError(message:string, code:number):never{
    throw{message:message, errorCode:code}
}
console.log(generateError('internal server error', 500))
const result = generateError('Never produces a value', 501) // this returns not just void but never
console.log(result)