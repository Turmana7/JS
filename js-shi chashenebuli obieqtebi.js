let x = Number("1.23566");
console.log(x);//1.23566
console.log(typeof x);//number
console.log(typeof x.toString());//number gadayavs stringshi
console.log(x.toFixed(3));//1.235 daamrgvalebs wertilis mere 3ciframde
console.log(x.toPrecision(1));//1 dargvaleba 1 ciframde
console.log(x.toPrecision(4));//1.236 damrgvaleba 4ciframde

console.log(Number.MAX_VALUE);// 1.7976931348623157e308
console.log(Number.MIN_VALUE);// 5e-324
console.log(Number.MAX_SAFE_INTEGER);// 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);// -9007199254740991

let y = Math.abs(-25);//moduli
console.log(y);//25

let z = Math.round(5.96);//damrgvaleba mtel ricxvamde
console.log(z);//6

let b = Math.floor(5.96);//dabla damrgvaleba mtel ricxvamde
console.log(b);//5

let u = Math.ceil(1.15);//magla damrgvaleba mtel ricxvamde
console.log(u);//2

let q = Math.pow(5,3);//125 xarisxshi ayvana
console.log(5**3);//125
console.log(q);

let f = Math.sqrt(9);//kvadratuli fesvis amogeba
console.log(f);

let random = Math.random();//random ricxvi 0idan 1amde
console.log(random);

let mx = Math.max(10,15,11,22,44);//max 
console.log(mx);

let mn = Math.min(10,15,11,22,44);//min
console.log(mn);

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
console.log(words);//[ 'idk', 'ra', 'davwero' ]

const mes = "ki,wamoval";
const tanaxmaa = mes.startsWith("ki");
console.log(tanaxmaa);

const mes1 = "kargad brat";
const merusetea = mes1.endsWith("brat");
console.log(merusetea);

const array = [1,2,3,4];
array.push(7,8,9);//boloshi chamateba
console.log(array);

const array1 = [1,2,3,4];
array1.pop();//bolodan washla
console.log(array1);//[ 1, 2, 3 ]

const array2 = [1,2,3,4,5];
array2.shift();//marcxnidan washla
console.log(array2);//[ 2, 3, 4, 5 ]

const array3 = [1,2,3,4,5];
array3.unshift(0);//marcxnidan chamateba
console.log(array3);//[ 0, 1, 2, 3, 4, 5 ]

const array4 = [1,2,3,4,5];
array4.reverse();//masivis shemobruneba
console.log(array4);//[ 0, 1, 2, 3, 4, 5 ]

const sityvebi = ["gamarjoba" , "saba" , "rogor" , "xar"];
const salami = sityvebi.join(" ");//sityvebis sheerteba
console.log(salami);