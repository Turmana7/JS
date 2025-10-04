const array = [1,2,3,4];

array.forEach(item => {//es igivea rac for loop-i, romelic ufro martiv algoritmebshi aris kargi.forEach arafers ar areturnebs
    console.log(item);
})

const array1 = [1,3,5,7];

const newArray1 = array1.map(item => item/2);//map metodi gamoiyeneba mashin roca gbinda arrayze gadavla da mis axal array-d qceva.map returns aketebs romelic shegidzlia array-shi sheinaxo.
console.log(newArray1);

const array2 = [1,2,3,4,5,6,7,8,9,10];

const found = array2.find(item => item == 3);//find funqcia edzebs imas ris modzebnasac vubrdzanbt
console.log(found);

const array3 = [1,2,3,4,5];

const filtered = array3.filter(item => item % 2 == 1);
console.log(filtered);

const array4 = [1,2,3,4,5,6,7,8,9,10];

const jami = array4.reduce((sum,item) => sum+item);
console.log(jami);