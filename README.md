# <p style="color: blue">Be A TypeScript Technocrat: <p>

## Lackings in JavaScript

- Dynamically typed language. We can declare any type of variable at any time. We can put a string in a variable, we can put a number/boolean/function/array/object in the same variable. If there’s no problem in a small project for type checking, it will be very difficult to check the type in a large project. It’s very difficult to manage in the large scale project with JavaScript. Until we go to runtime with JavaScript code, we can’t find the error. By default, object-oriented is not working in JavaScript.

When working in a large application with multiple developers:

- Very difficult to maintain a large codebase.
- Hard to find bugs.
- Catch errors only in runtime.

## Benefits of TypeScript

- Supports older browsers: If we need older versions (ES3) of JavaScript to support older browsers, we can use TypeScript easily. TypeScript code can be transpiled into older versions of JavaScript (ES3, ES5, ES6, TS).
- Type safety: TypeScript code can be transpiled into JavaScript, allowing for type checking.
- JavaScript types in TypeScript: Number, String, Boolean, Null, Undefined, Object, Symbol.
- TS own types: Interface, Void, Array, Tuple, Enum, Union, Intersection.
- Increase your productivity.
- Fewer bugs and less time in testing.

## Drawbacks of using TypeScript

- Type complexities: Adding type annotations can increase the amount of code developers need to write, which increases complexity.
- Limited library support: Some libraries don’t support TypeScript by default. Additional libraries may be required.
- Build Time: The compilation step, while necessary for converting TypeScript to JavaScript, can increase the overall build time of the project, especially in larger codebases.
- Migration challenges: Transpiling TypeScript to JavaScript is sometimes challenging.

## Can Browsers recognize TypeScript code?

No. We need to transpile TypeScript to JavaScript and run the JavaScript code in Node or a browser.

## Node version management

Node has different versions. But when we make projects with a version, then if we update the version, the previous project may not work well. (So we need to use Docker.) To manage the version, we need to use a package NVM (Node Version Manager). We can use multiple versions at any time, and we can change the version as we need. We can switch to any Node version.

- NVM guide: [Node Version Manager (NVM) Install Guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

## TypeScript

- [TypeScript Official Website](https://www.typescriptlang.org/)
- Use `tsc --init` to get TypeScript configuration.
- `Root-dir`: (directory of TypeScript root file)
- `Out-dir`: (directory of TypeScript file compiled to JavaScript file) dist folder
- `Target`: (can change JavaScript version)
- Type `tsc` in the terminal to transpile TypeScript file to JavaScript in the dist folder.

## Run TypeScript in the Editor

Use the `ts-node-dev` package.

```bash
ts-node-dev --respawn --transpile-only ./module1/src/1.12.ts
```

## Basic Data Types

### Implicit Data Types

Implicit data typing refers to the approach where TypeScript infers the data type of a variable based on the value assigned to it.

```typescript
let variable = 123; // TypeScript infers the type as number
```

### Explicit Data Types

Explicit data typing involves explicitly specifying the data type of a variable when it is declared.

```typescript
let variable: number = 123; // Explicitly specifying the type as number
```

### Anytype

The 'any' type is used to represent any data type. It allows a variable to hold values of any data type and effectively disables type checking for that variable.

```typescript
let d;
let variable: any;
variable = 123; // Valid since 'any' type can hold any value
console.log(variable); // 123
variable = 'hello';
console.log(variable); // hello
variable = true;
console.log(variable); // true
```

### Primitive types

- Number: `let roll: number = 1223`
- String: `let firstName: string = "ulfath"`
- Boolean: `let isAdmin: boolean = true`
- Null: `let y: null = null`
- Undefined: `let x: undefined = undefined`
- Symbol

### Non-primitive types (array, tuple, object)

- Array: `let friends: string[] = ["rachel", "monica"]`

- Tuple: A tuple is a data structure that allows you to express an array with a fixed number of elements, where each element may be of a different type.

```typescript
let coordinate: [number, number] = [1, 3];
let ageName: [number, string, boolean] = [50, 'Mr.X', true];
ageName[0] = 9;
```

- Object, Optional, and Literal:

```typescript
const user: {
  readonly company: string; // literal type, it can’t change
  firstName: string;
  middleName?: string; // optional type, This indicates that the property or parameter may be present or absent.
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: 'ali',
  lastName: 'Islam',
  isMarried: true,
};
```

### Function in TypeScript

When a function stays inside an object, it’s called a method. It won’t be an arrow function; it will be a normal function. It works in a normal function, not in an arrow function.

```typescript
function add(num1: number, num2: number) {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

// method --> if a function stays inside an object, it’s called a method. We won’t use an arrow function here; we will use a normal function.
const poorUser = {
  name: 'Ulfath',
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`; // This keyword: to access any property from an object
  }
};

// Callback function: a function that is passed as an argument to another function and is intended to be executed at a later time.
const arr: number[] = [1, 2, 5];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
```

### Spread operator, rest operator, destructuring
### Rest operator:
  The rest operator collects multiple elements into an array. It allows to work with an indefinite number of function arguments as an array, making it easier to handle     situations where the exact number of parameters is unknown or variable.

```
const greetFriends = (...friends: string[]) => {
friends.forEach((friend: string)=> console.log(`Hi ${friends}`))
};
greetFriends('Abul', 'Kabul', 'Babul')
```



### Spread operator:
  The spread operator allows an iterable (like an array or a string) to be expanded into individual elements. It is commonly used to make copies of arrays or combine arrays. In TypeScript, it can also be used with objects.
 ```
/const array1 = [1, 2, 3];
 const array2 = [...array1, 4, 5, 6]; // creates a copy of array1 and adds elements
 const obj1 = { name: 'John', age: 30 };
 const obj2 = { ...obj1, id: 123 }; // creates a copy of obj1 and adds a new property
```


### Object destructuring 
```
// object destructuring
const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name, age } = user; 
console.log(name); // Output: John
console.log(age); // Output: 30
```

### Array destructuring
```
const myFriends = ['alo', 'rano', 'fgggg','rose','rhuib'];

const [,, bestFriend, ...rest ] = myFriends; 
(,, -> skip 1st, 2nd element)
```



### Type alias in typescript

Type should be start with capital letter to understand easily.

a type alias is a way to create a new name for a type. It allows you to create a custom name that represents a complex type definition. Type aliases are especially useful when you need to use the same complex type in multiple places in your code.

Type aliases can also be used to represent more complex types, such as object types, union types, intersection types, and more.
```
// type alias for function
type Add = (num1: number, num2: number) => number


const add: Add =(num1, num2) => num1 + num2;
```

### Union and Intersection types

### Union Type:
A union type allows a value to be of more than one type. It is represented by the pipe symbol (|)

```
type MyType = string | number;
let value: MyType;
value = "hello"; // Valid
value = 123; // Valid
// value = true; // Invalid, as it's not part of the union type
```


### Intersection type: 
  An intersection type allows you to combine multiple types into one, where the resulting type has all the features of each original type. It is represented by the ampersand symbol (&).
  ```
type FirstType = { name: string };
type SecondType = { age: number };
type CombinedType = FirstType & SecondType;


let obj: CombinedType = { name: "John", age: 30 };
```


### ternery operator, optional chaining , nullish coalescing


### ternery operator:
```
const isAdult = age >=18 ? 'adult' : 'not adult'
```

### nullish coalescing:
To set a default value which depends on null or undefined, then we will use it.
```
const isAthenticated = null;
const result1 = isAthenticated ?? 'Guest';
```

### optional chaining:
You can use optional chaining when you want to access properties on objects that may be deeply nested
```
const permanentaddress = user?.address?.permanentaddress ?? "No Permanent address";
```

### Never type:
The never type in TypeScript represents the type of values that never occur. It is used to indicate that something will never happen or that a function will never return (throw an error). The never type is a subtype of all types, meaning it can be assigned to any other type, but no other types can be assigned to it.
```
// never
const throwError = (msg: string): never=> {
throw new Error(msg);
}
throwError('i got error')
```


### Unknown type:
The unknown type in TypeScript is for values that we may not know the type of at compile time(run time). It's different from the any type because it forces you to do some form of type checking before you can work with it safely.
```
const getSpeedInMeterPerSecond = (value:unknown) => {
if(typeof value === 'number'){
const convertedSpeed = (value*1000) / 3600;
console.log(`The speed is ${convertedSpeed}`);
}
else if(typeof value ==='string'){
const [result, unit] = value.split(' ')
const convertedSpeed = (parseFloat(result)*1000) / 3600;
console.log(result);
}
else{
console.log('wrong input');
}
}
// getSpeedInMeterPerSecond(`1000 kmh^-1`)
getSpeedInMeterPerSecond(null) //wrong input
```


### Nullable type :
It represents either the specified type or the value null. By default, most types in TypeScript are non-nullable, meaning they cannot be assigned the value null or undefined. However, you can explicitly declare a type to be nullable by using the union type in conjunction with null. 

We can use it for searching bar.

```
const searchName = (value: string | null) => {
if (value) {
console.log(('searching'));
} else{
console.log('there is nothing to search');
}
}
searchName(null) // there is nothing to search
```

## Type Assertion and Type Narrowing

Type assertion and type narrowing allow you to work with uncertain types:
```
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // Outputs: 16
```
## Type vs. Interface

```
type Person = {
  name: string;
  age: number;
};
```
interface Person {
  name: string;
  age: number;
}

### generics

```type GenericArray<T> = Array<T>;
const myArray: GenericArray<number> = [1, 2, 4];

type GenericTuple<X, Y> = [X, Y];
const manush: GenericTuple<string, string> = ['Mr.X', 'Mr.Y'];

interface Box<T> {
  contents: T;
}
type NumberBox = Box<number>;
const myNumberBox: NumberBox = { contents: 42 };
```
### Generic function
```function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

function concatenate<T, U>(tuple1: [T], tuple2: [U]): [T, U] {
  return [tuple1[0], tuple2[0]];
}
```
### Constraints

```
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}
```
### Asynchronous TypeScript

### Conditional Types
```
type x = a1 extends null ? true : false;
type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
```
### Mapped Types
```
type NameAge = Pick<Person, 'name' | 'age'>;
type ContactInfo = Omit<Person, 'name' | 'age'>;
type PersonRequired = Required<Person>;
type PersonPartial = Partial<Person>;
type PersonReadonly = Readonly<Person>;
type MyObj = Record<string, string>;
```
### Utility Types
Utility types simplify common type manipulations:

Pick: Select specific properties from a type.
Omit: Exclude specific properties from a type.
Required: Make properties of a type mandatory.
Partial: Make properties of a type optional.
Readonly: Make a type's properties read-only.
Record: Create a mapped type with keys and values.

```
//pick
type NameAge = Pick<Person, 'name' | 'age'> 

//Omit
ype ContactInfo = Omit<Person, 'name' | 'age'>

//Required
type PersonRequired = Required<Person>

//Partial
type PersonPartial = Partial<Person>

//Readonly
type PersonReadonly = Readonly<Person> //can't change the property value;

//Record
type MyObj = Record<string,string>

const EmptyObj : Record<string, unknown> = {} //when we know the property type but not the value type

```