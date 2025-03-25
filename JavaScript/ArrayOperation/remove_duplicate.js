let arr=[1,1,9,9,6,16,16,45,2];
let unique=arr.filter((val,i,s)=>s.indexOf(val)==i);
console.log(unique);
