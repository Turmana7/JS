let x;//informacia ar inaxeba anu undefined ari(js agwers informaciis ararsebobas)
let y = 5;
let userIsAdmin = null;//anu informacia ar arsebobs(deveoperebi amit agweren ifnormaciis ararsebobas)
console.log(typeof x);//undefined
console.log(typeof y);//number
console.log(typeof userIsAdmin);//object

let welcome = "გამარჯობა საქარველო";//string
console.log(welcome);

let userName = "საბა";
let welcomeMessage1 = 'welcome to saba\'s website ';// '\' am simboloti vaxvedrebt rom ar aris stringis dasasruli
console.log("გამარჯობა" + userName);//გამარჯობასაბა
console.log("გამარჯობა " + userName);//გამარჯობა საბა
console.log("Welcome to saba's website");
console.log(welcomeMessage1);

const userFirstName = "Niko";
const balance = 50;
const welcomeMessage = `Welcome to our website ${userFirstName}!, Your balance is ${balance}`;// '`' am simboloti shemosazgvruli string aris smart type anu template literal
console.log(welcomeMessage);

let myScores = [10,9,8,10,10,7];//masivi , type(object)
let random = ["Hi",3,true,"Bye"];//shegvidzlia ert arrayshi sxvadasxva tipis informacia movatavsot
let message = "gamarjoba";
console.log(message[0]);//shegvidzlia stringidanac amoviwerot simbolo
myScores[0] = 1;
myScores[1] = 2;
myScores[2] = 3;
//igivea rac zemot weria
console.log(myScores.length);//index like c++(starts from 0)
