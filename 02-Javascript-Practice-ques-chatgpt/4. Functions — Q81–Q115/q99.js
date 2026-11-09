// Q99 🟡 Function se function return karo.

// function createMutipier(factor){

//     return function (num){

//         return num*factor;
//     }
// };

// const double = createMutipier(2)
// console.log(double(3)); // 6
// console.log(double(5)); // 10


// const triple = createMutipier(3)

// console.log(triple(3)); // 9
// console.log(triple(5)); // 15


const createMutipier = (factor) => {

    return (num) => {

        return num * factor
    }
}

const double = createMutipier(2);
console.log(double(3)); // 6

const triple = createMutipier(3)
console.log(triple(3)); // 9

