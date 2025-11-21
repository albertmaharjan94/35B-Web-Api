let message: string = "Hello";
console.log(message);
// message = 0 // Error

// Primitive types
let booleanVar: boolean = true;
let numberVar: number = 42;
let symbolVar: symbol = Symbol("unique");
let nullVar: null = null;
let undefinedVar: undefined = undefined;

let anyVar: any = "Could be anything";
anyVar = anyVar + 100; // No error

let unknownVar: unknown = "Could be anything too";
// unknownVar = unknownVar + 100; // Error
// unknown is type assertion

let scores: number[] = [90, 80, 70];
console.log(scores)
// tuples
let tupleVar: [string, number] = ["Alice", 30];
console.log(tupleVar)
// tupleVar = [30, "Alice"] // Error

// Union
let id: string | number;
id = "Hello";
console.log(id)
id = 123;
console.log(id);
// id = true // err

// functions
function add(num1: number, num2: number): string {
    let sum: number = num1 + num2;
    return `Sum is ${sum}`;
}
let result: string = add(10, 20);
console.log(result)

const greet = (name: string = "Guset"): void => {
    console.log(`Hello, ${name}`);
}
greet(); // name is optional if default value

// Object Defination
// 1. Object Literal
let person: { name: string; age: number } = {
    name: "Bob",
    age: 25,
    // isActive: true // error
};
console.log(person, person.name);

// 2. Interface
interface Product{
    id: number;
    name: string;
    price: number;
    description?: string; // optional
}
const laptop: Product = {
    id: 1,
    name: "Laptop",
    price: 1500
};
console.log(laptop);

// 3. Type Alias
type Student = {
    id: number;
    name: string;
    grade: string;
    product?: Product 
}
let student1: Student = {
    id: 101,
    name: "Charlie",
    grade: "A",
    product: laptop
};
console.log(student1);

// Generics 
function identity<T>(arg: T): T {
    return arg;
}
// Data type injected at call time
let output1: string = identity<string>("myString");
console.log(output1);
let output2: number = identity<number>(100);
console.log(output2);

// enum
// named constant
enum Role{
    Admin, // Admin = 0
    User,
    Guest
}
let userRole: Role = Role.Admin;
console.log(userRole); // 0
console.log(userRole == Role.Admin) // constant check

let userRoleName: string = "admin";
console.log(userRoleName == "Admin") // case sensitive check

// Generic Usecase
interface User {
    id: number;
    name: string;
    role: Role;
}
let optUser: Partial<User> = {
    name: "Dave"
};
// every attribute is optional
console.log(optUser);
let readonlyUser: Readonly<User> = {
    id: 1,
    name: "Eve",
    role: Role.User
};
// readonlyUser.id = 2; // Error
console.log(readonlyUser);



// Tasks
// Create enum for CarType: Sedan, SUV, Truck, Coupe.
// create a type CarModel.
// - name: string, description: string
// Create an interface for a Car with properties: 
// make: string or number, model: CarModel, 
// year: number, 
// type : CarType, and isElectric (optional) boolean or number or string.
// create a array of cars with at least 3 car objects.
// filter the cars whose year is greater than 2015
enum CarType {
    Sedan,
    SUV,
    Truck,
    Coupe
}
type CarModel = {
    name: string;
    description: string;
}
interface Car {
    make: string | number;
    model: CarModel;
    year: number;
    type: CarType;
    isElectric?: boolean | number | string;
}