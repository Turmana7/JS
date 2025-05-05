console.log('hello world');
console.log(20>100);//false
let x = 10;//მინიჭება;
const y = 15;

let president = true;
let primeMinister = true;
let generalOfArmies = false;
const bombWillLaunch = president && primeMinister && generalOfArmies;
console.log(bombWillLaunch);

let userLoggedIn = true;
let userPaid = false;
let userIsAdmin = false;

const showProduct = userLoggedIn && (userIsAdmin || userPaid);
console.log(showProduct);

const showLoginScreen =! userLoggedIn;
console.log(showLoginScreen);

const showBuyButton = !(userIsAdmin || userPaid);
console.log(showBuyButton);
/*
let showBuyButton =! (userIsAdmin || userPaid);
console.log(showBuyButton);
*/

//const discount = userIsAdmin ? 25 : 0;
//console.log(discount);

const userDistance = 55;
const shippingCost = userDistance <= 50? 10 : 20;//tu piroba true aris mashin gamoitans 10-s tuarada 15-s;
console.log(shippingCost); 

let userIsStudent=false;    
let discount;
if(userIsAdmin){
    console.log("You are admin!!!");
    discount = 25;
}else if(userIsStudent){
    console.log("You are student");
    discount = 15;
}else {
    console.log("You are just a nigger");
    discount = 0;
}
console.log(discount);

/*
0-->false true-->nulis garda yvela
console.log(0>false);//false
console.log(!10);//false
console.log(!!10);//true
console.log(0 && 10);

console.log(!true);//false
console.log(!false);//true
console.log(!(true && false));//true
console.log(!(true || false));//false
*/