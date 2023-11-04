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

Rest operator: The rest operator collects multiple elements into an array. It allows you to work with an indefinite number of function arguments as an array, making
