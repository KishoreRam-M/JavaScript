 let isCofeeReady =new Promise ((reslove,reject) =>
{

let isCofeeReadyy=true;
if(isCofeeReadyy)
{
    reslove();
}
else
{
    reject();
}


});

isCofeeReady.then(ready)
.catch(outOfStock);
function ready()
{
console.log("have a nice day..");
}
function outOfStock()
{
    console.log("Sorry Sir Coffee  is not availabe  but tea is ready you need ?")
}
