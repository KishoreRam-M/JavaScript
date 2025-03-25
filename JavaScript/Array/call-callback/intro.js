function func(c) {
    console.log("I love you");
    c();  // Execute the callback function
}

function fun() {
    console.log("Kishore ram");
}

// ✅ Pass function reference, NOT function execution
func(fun);

console.log(".....................................");

// ✅ Using arrow function
func(() => console.log("Ram"));
