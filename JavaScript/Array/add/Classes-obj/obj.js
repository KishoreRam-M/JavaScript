let  Student ={
    name:"Kishore",
    age:18,
    dep:"CSE",
    cities:"Kadayanallur",
    clg:"VTMT"

};
console.log(Object.keys(Student)); // only for keys
console.log(Object.values(Student)); // only for values
console.log(Object.entries(Student));// both key:value







let  Student1 ={
    name:"Ram",
    age:19,
    dep:"CSE",
    cities:"Mathalamparai",
    clg:"VTMT"

};

let merged = Object.assign({},Student,Student1);
console.log(JSON.stringify(merged)+"To  Be Continue..");



let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged1 = Object.assign({}, obj1, obj2);
console.log(merged1); // { a: 1, b: 2 }
let obj3=obj1+obj2;
console.log("HHAAAA"+ obj3);


Object.freeze(Student);// it allow delete and modify
Student1["clg"]="VTHT";
console.log(Student1);

Object.seal(Student1);// allow modify but donnot delete
delete Student1.clg;
console.log(Student);
console.log(Student1);
for(let i in Student)
{
    console.log(i);
}

