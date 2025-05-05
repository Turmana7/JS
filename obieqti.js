const list = ["Saba","Nika","Luka",["Gio","Aliosha"],true];

console.log(list[3][0]);//Gio

const maswebi = [
    {
        fn: "Badri",
        ln: "Qartvelishvili"
    },
    {
        fn: "Malkhazi",
        ln: "Jinjixadze"
    }

];
console.log(maswebi[1].fn);
const mentor = {
    firstName: "Saba",
    lastName: "Turmanidze",
    age: 17,
    job: "nope",
    students: [
        {
            firstN: "bla",
            lastN: "blu"
        },
        {
            firstN: "fla",
            lastN: "flu"
        }
    ],
    contacts: {
        phone: "0000000",
        messenger: "gvkidia123",
        skype: "esufro :DD",
        tiktok: "sqrole ra"
    }
};
console.log(mentor.contacts.messenger);
const userAskedFor = "job";
console.log(mentor[userAskedFor]);
console.log(mentor.students[2]);//Luka

mnt = mentor.students[0];
mnt1 = mentor.students[1];

for(let i = 0;i<mentor.students.length;i++){
    const currentStudent = mentor.students[i];
    console.log(`${currentStudent.firstN} ${currentStudent.lastN}`);
}