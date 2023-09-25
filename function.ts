function add(n1:number, n2:number): number{
    return n1 + n2
}

function printResult(num:number):void{
    console.log('Result'+ num)
}

printResult(add(5,6))
let hold: Function;
hold = add
hold = printResult //typescript wont complain here and would throw undefine at run time

// function type are types that describe a function regarding the parameters and the return values
let combine: (a:number,b:number)=>number;
combine = add;

console.log(combine(8,8))

function addHandle(c:number, b:number, cd:(num:number)=>void){
    const result = c+b
    return cd(result)
}
addHandle(10, 20, (result)=>{
    console.log(result)
})