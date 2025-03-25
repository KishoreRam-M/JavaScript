function func(funcc)
{
   return funcc();
}
let f=func((x)=>x);
console.log(f(20));
