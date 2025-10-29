//let x = 100;//aq number tipi rom mieniwa am cvlads sxva informaciis tips vegar mivaniwebs magalitad boolean string da e.t.c mxolod shegvidzlia shevcvalot isv number tipit

//x = "Hi";typescriptshi cvladis sheqmnisas ra tipis informaciasac vawvdit is tipi unda darches aucileblad
//console.log(x);

function add(num1: number, num2: number){
    return num1 + num2;
}
let x = add(Number('3'), +('4'));
console.log(x);

type Sudent = {
    name: string;
    lastName: string;
    age?: number;//am kitxvis nishnit gavaqret error romelic  gankutvnili iyo age cvladistvis imitom rom argvqonda miniwebuli araferi amit ki es error movarda da iqca option-ad
}

const Saba: Student = {//type any tishavs typescripts
    name: "Saba",
    lastName: "Turmanidze"
}

Saba.name = "Nika";
Saba.age = 18;

const scores: number[] = [1,2,3];
scores.push(4);
console.log(scores);//[1,2,3,4]
//scores.push('Hello')es aris error radgan number tipis arrayshi vagdebt strings