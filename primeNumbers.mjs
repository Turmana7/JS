export default function isPrime(){//radgan default exportia shegvidzlia importisas saxeli chven davarqvat
    console.log("hello");
}

console.log("this file is imported");//jer gaeshveba es radgan importirebuli 
// funqciis garetaa da roca files aimporteb 
// yvelaferi eshveba da aram mxolod daimportebuli funqcia an rame

const onlyPrimes = (array) => {//export romelic default araa uamravi shegvidzlia gavaketot ,xolo default mxolod 1
    console.log("Here is only prime numbers!!");
}

const firstTenNumbers = [1,2,3,4,5,6,7,8,9,10];

export{
    onlyPrimes,
    firstTenNumbers
}