function welcome(userFirstName){
    console.log(`zrarova ${userFirstName} ravaxar brat`);
}

function login(){
console.log("email:  password:")
}

function gift(userFirstName,prizi="araferi"){//parametri
    console.log(`gamarjoba ${userFirstName},shen miige ${prizi}`);
}
login();
welcome("brat");
gift("saba","iphone 16 ProMax");//argumenti

function misalmeba(userFirstName){
return `zdarova ${userFirstName} ravaxar too`;
}

console.log(misalmeba("nick"));

function calcAge(birthYear){
 return 2025 - birthYear;
}
const averageAge = (person1,person2) =>{
    const avgAge = (calcAge(person1) + calcAge(person2))/2;
    console.log(`2 adamianis asakia ${avgAge}`)
}
averageAge(2013,2003);

const all1 = (userFirstName,prizi) =>{//1parametrze arunda frchxilebi
return `gamarjoba ${userFirstName},shen miige ${prizi}`;
}

const all = userFirstName =>`gamarjoba ${userFirstName}`;//TU RETURNS WER

    