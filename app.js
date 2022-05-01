//Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

let modifiedFood = foods.slice(1,4)
console.log("Function #1: Array Slice")
console.log(modifiedFood)


//Function #2: Array Splice
modifiedFood = foods
modifiedFood.splice(2,0,'noodles','icecream')
console.log("Function #2: Array Splice")
console.log(modifiedFood)

//Funtion #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];

console.log("Funtion #3: Filter")
console.log(numberArray.filter(isEven));
console.log(numberArray.filter(isPrime));

function isEven(a){
    if(a%2 === 0){
        return true;
    }
    else{
        return false
    }
}
function isPrime(a){
    if(a == 2){
        return true
    }
    else{
        for(let i=2;i<=Math.sqrt(a);i++){
            if(a%i == 0){
                return false
            }
        }
        return true
    }
}



//Function #4: Reject
console.log("Function #4: Reject")
console.log(nonPrime(numberArray))

function nonPrime(numberArray){
    let arr = [];
    numberArray.forEach(element => {
        if(! isPrime(element)){
            arr.push(element)
        }
    });
    return arr
}



//Function #5: Lambda
isEven = (a) => {
    if(a%2 == 0){
        return true
    }
    else{
        return false
    }
}
console.log("Function #5: Lambda (does not require output")



//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
console.log("Function #6: Map")
console.log(myArray.map(findSqareOfNumbers))

function findSqareOfNumbers(a){
    return a**2
}



//Function #7: Reduce
console.log("Function #7: Reduce")
console.log(numberArray.reduce(multiply,1))

function multiply(a,b){
    return a*b;
}