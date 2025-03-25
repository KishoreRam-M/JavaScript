let arr=[5,6,5];
let t=arr.reduce((total,value)=>{
   return  total+=value
} ,0)
console.log(t);