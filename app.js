var userInput;
var userName;
userInput = 5;
userInput = 'just';
// userName = userInput // this throws an error because user input is not guaranteed to be string
var userInput1;
var userName1;
userInput1 = 4;
userName1 = userInput1; // this doesnt throw and error because ts disables type check with the any type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(generateError('internal server error', 500));
var result = generateError('Never produces a value', 501); // this returns not just void but never
console.log(result);
