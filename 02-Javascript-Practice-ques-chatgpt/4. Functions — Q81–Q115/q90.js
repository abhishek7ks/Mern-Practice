// Q90 🟢 Temperature conversion function set banao.

const fahrenhiet = (celcious) =>{

    return celcious * 9/5 + 32
} 

const cel = (fahr) => {

    return (fahr-32)/1.8
}


let result = fahrenhiet(32);
console.log(result);
result = cel(32)
console.log(result);