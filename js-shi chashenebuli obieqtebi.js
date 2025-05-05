let x = 1.23566;
console.log(x.toFixed(3));//1.235
console.log(x);//1.23566
console.log(typeof x.toString());
console.log(typeof x);
console.log(x.toPrecision(1));//1
console.log(x.toPrecision(4));//1.236

let y = Math.abs(-25);//moduli
console.log(y);//25

let z = Math.round(5.96);//damrgvaleba
console.log(z);//6

let w = Math.floor(5.96);//dabla damrgvaleba
console.log(w);//5

let u = Math.ceil(1.15);//magla damrgvaleba
console.log(u);//2

let q = Math.pow(5,3);//ricxvi da xarisxi "**" aris xarisxshi mavani operatori
console.log(q);

let f = Math.sqrt(9);//fesvshi ayvana
console.log(f);

let p = Math.random();//random ricxvi 0idan 1amde
console.log(p);

let i = Math.max(10,15,11,22,44);//max 
console.log(i);

let e = Math.min(10,15,11,22,44);//min
console.log(e);

const message = "zdarova dzma";
let search = "zdarova";

const found = message.includes(search);//true
console.log(found);

const block =  "###";
const line = block.repeat(3);
console.log(line);

const welcome = "gaumarjos newuser";
const bye = welcome.replace("gaumarjos" , "kaat iyavi");//1.rasac cvli 2.rashic cvli
console.log(bye);

const racxa = "idk ra davwero";
const words = racxa.split(" ");//calcale yofs winadadebas 
console.log(words);

const mes = "ki,wamoval";
const tanaxmaa = mes.startsWith("ki");
console.log(tanaxmaa);

const mes1 = "kargad brat";
const merusetea = mes1.endsWith("brat");
console.log(merusetea);

const array = [1,2,3,4];
array.push(7,8,9);//marjvnidan chamateba
console.log(array);

const array1 = [1,2,3,4];
array1.pop();//marjvnidan washla
console.log(array1);

const array2 = [1,2,3,4,5];
array2.shift();//marcxnidan washla
console.log(array2);

const array3 = [1,2,3,4,5];
array3.unshift(0);//marcxnidan chamateba
console.log(array3);

const array4 = [1,2,3,4,5];
array4.reverse();//masivis shemobruneba
console.log(array4);

const sityvebi = ["gamarjoba" , "saba" , "rogor" , "xar"];
const salami = sityvebi.join(" ");//sityvebis sheerteba
console.log(salami);
