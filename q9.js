// console.log(typeof 42);             
// console.log(typeof "42");           
// console.log(typeof true);           
// console.log(typeof null);           
// console.log(typeof undefined);      
// console.log(typeof [1, 2, 3]);     
// console.log(typeof { a: 1 });       
// console.log(typeof function () {}); 
// console.log(typeof NaN);         

function getType(value) {
    if (value === null)return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}
console.log(getType(42));
"number"
console.log(getType("42"));
"string"
console.log(getType(true));
"boolean"
console.log(getType(null));
"null"
console.log(getType(undefined));
"undefined"
console.log(getType([1, 2, 3]));
"array"
console.log(getType({ a: 1 }));
"object"
console.log(getType(function () {}));
"function"
console.log(getType(NaN));
"number"
