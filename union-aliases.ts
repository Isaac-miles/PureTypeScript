type combine = number | string
type conversion = 'as-number'|'as-text'   //literal types


function combined(input1:combine,input2:combine, resultConversion:conversion){
    let result;
    if(typeof input1==='number' && typeof input2=== 'number' || resultConversion==='as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString()
    }
    return result;
}