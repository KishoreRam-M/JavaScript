console.log("agjwjr");

let arr = [1, 21, "satisfies", "addEventListener", "a"]; // Fixing undefined values

function display(arr) {
    console.log(arr);
}




display(arr);
function factorial(num)
{
    if(num===1)
    {
        return  1;
    }
    return  num *factorial(num-1);
}


console.log(factorial(5));
// default parameter
function func(name="kisjore"){
    console.log(name);
}

func();

//  Expression
let isEven =  function  func (num)
{
    if(num%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}



let nameFunc = (name) => name;
console.log(nameFunc("Kishore")); // Output: Kishore
