function doubleArray(arr,callback){
    const doubleArr=arr.map((num)=> {return callback(num);})
    return doubleArr;
}
const Array=[2,4,6,8]
function callback(num){
    return num*2;
}

const doubledArray=doubleArray(Array,callback);
console.log(doubledArray);