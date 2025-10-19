let x = 10;//value type
let y = x;
y = 5;
console.log(x);//10

let s = "hello";//value type
let st = s;
st = "hello there";
console.log(s);//hello

let q = [1,2,3];//array(reference type)
let p = q;
p[0] = 10; 
console.log(q);//[10,2,3] 

const student1 = {
    firstName: "Saba",
    lastName: "Turmanidze"
};
const student2 = {...student1};
student2.firstName = "Lasha";
console.log("student1 = ",student1);
console.log("student2 = ",student2);

//spead operatori gamoiyeneba arrayebtan da obieqtebtan
const array1 = [10,11,12];
const array2 = [...array1];//"..." aris spread romelic arraydan igebs yvela informacias
array2[0] = 13;
const array3 = [...array1,...array2];
const maxNumber = Math.max(...array3);
function f(a,b,c) {
    console.log(a,b,c);
}

console.log(array1);//[10,11,12]
console.log(array2);//[13,11,12]
console.log(array3);//[10,11,12,13,11,12];
console.log(maxNumber);
f(...array3);//10,11,12

const student = {
    firstName: "Saba",
    lastName: "Turmanidze",
    scores: [9,8,10]
};

const student3 = {...student};
student3.firstName = "Deme";
student3.scores.push(8);//am dros oriveshi icvleba radgan arrays dakopirebisas ar kopirdeba tviton array aramed kopirdeba misi misamarti es xdeba nested typeshi anu roca obieqtshi array gaq piriqit da etc.-->solution is down there
console.log(`student = `, student);
console.log(`student3 = `, student3);

const student0 = {
    firstName: "Saba",
    lastName: "Turmanidze",
    scores: [9,8,10]
};
const student0AsString = JSON.stringify(student0);//JSON romar gamoviyenit shegvidzlia dgavutolot "structuredClone(student0)" romelic igivea rac 58-59 xazebi
const newStudent0Object = JSON.parse(student0AsString);//axali obieqti aawyo stringidan
newStudent0Object.firstName = "Nikusha";
newStudent0Object.scores.push(8);
console.log(`student0 = `, student0);
console.log(`newStudent0Object = `, newStudent0Object);
