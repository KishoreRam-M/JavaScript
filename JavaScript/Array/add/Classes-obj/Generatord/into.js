function* generator()
{
    yield "kishore";
    yield  "ram";

}
let gen=generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);