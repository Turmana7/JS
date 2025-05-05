let downloadProgress = 0;

while(downloadProgress <= 100){
    console.log(`Downloading ${downloadProgress}%`);
    downloadProgress++;
}

let sec=30;

while(sec>0){
    if(sec>25){
    console.log("ბევრი დარჩა");
    }else{
        console.log(`დარჩა ${sec} წამი`);
    }
    sec--;
}

for(let pr = 0;pr<=10;pr++){
    console.log(`${pr}კილოგრამი`);
}

let result = [1,2,3,4,5];

for(let i = 0;i < result.length;i++){
    console.log(result[i]);
}

for(let i = result.length - 1;i >= 0;i--){
    console.log(result[i]);
}

let welcome = "gamarjoba";

for(let i = 0;i < welcome.length;i++){
    console.log(welcome[i]);
}

let mes = "hello world";
let happyLvl = 10;

for(let i=0;i<happyLvl;i++){
    mes +="!";
}
console.log(mes);

const tech = ["HTML","CSS","JS","React"];
let search = "JS";

for(let i=0;i<tech.length;i++){
    console.log(`Looking for ${tech[i]}`);
    if(tech[i] == search){
        console.log(`${search} Found!`);
        break;
    }
}

let testResult = [20,50,51,10,100];
let goodResult = [];

for(let i = 0;i < testResult.length;i++){
    if(testResult[i] >= 50){
        goodResult[goodResult.length] = testResult[i];
    }
}
console.log(goodResult);

let ts = [10,10,20,30,40,50,50];

for(let i = 0;i < ts.length;i++){
    for(let k = i+1;k < ts.length;k++){
        if(ts[i] == ts[k]){
            console.log(`ჩანაწერი ${ts[i]}დუბლირებულია`);
        }
    }
}