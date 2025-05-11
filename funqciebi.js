function welcome(userFirstName){//es aris parametri
    console.log(`zdarova ${userFirstName} ravaxar brat`);
}
welcome("alex");//es ki argumentia
welcome();//tu parametrshi arguments ar chawer parametri undefine-d gadaiqceva

function misalmeba(userFirstName){
return `zdarova ${userFirstName} ravaxar too`;
}
console.log(misalmeba("nick"));//misalmeba("nick") amshemtxvevashi gadaiqca teqstad amitom dawirda console.log

function login(){
console.log("email:  password:")
}
login();

function gift(userFirstName,prizi="araferi"){//prizs mivutitet "araferi" default mnishvnelobad da amas gamoiyenebs im shemtxvevashi roca parametrs argumenti ar gadmoecema
    console.log(`gamarjoba ${userFirstName},shen moige ${prizi}`);
}
gift("saba","iphone bolo");//argumentebi

function calcAge(birthYear){
 return 2025 - birthYear;
}
console.log(calcAge(2007));
if(calcAge(2007)>=18){
    console.log("Congratulation! You are adult");
}

const averageAge = (person1,person2) =>{
    const avgAge = (calcAge(person1) + calcAge(person2))/2;
    console.log(`2 adamianis asakia ${avgAge}`)
}
averageAge(2013,2003);

const gift1 = (userFirstName,prizi) =>{//1parametrze arunda frchxilebi
return `gamarjoba ${userFirstName},shen miige ${prizi}`;
}

const all = userFirstName =>`gamarjoba ${userFirstName}`;//TU RETURNS WER

    