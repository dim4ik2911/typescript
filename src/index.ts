// Basic Types /////////////////////////////////////////////////////////
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "yes", true];

// Tuple - is a TypeScript type that works like an array with some special considerations ///////////////////////////
let person: [number, string, boolean] = [1, "2", false];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "Lawrence"],
];

// Union ///////////////////////////////////////////////////////////////////
let pid: string | number;
pid = "22";
pid = 22;

// Enum /////////////////////////////////////////////////////////////////////
enum Direction1 {
  Up, //returns 0
  Down, //returns 1
  Left, //returns 2
  Right, //returns1
}

enum Direction2 {
  Up = 1, //returns 1
  Down, //returns 2
  Left, //returns 3
  Right, //returns 4
}

enum Direction3 {
  Up = "Up", //returns Up
  Down = "Down", //returns Down
  Left = "Left", //returns Left
  Right = "Right", //returns Right
}

// Objects ////////////////////////////////////////////////////////////////////
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion ////////////////////////////////////////////////////////////////
let cid: any = 1;
// two ways to do it
// first one
// let customerId = <number>cid;
// second one
let customerId = cid as number;

// Functions ///////////////////////////////////////////////////////////////////
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(2, 3));

// Void - can use if function does not return any value ///////////
function log(message: string | number): void {
  console.log(message);
}

// Interfaces ////////////////////////////////////////////////////////
interface UserInterface {
  // so you cannot reassign it like user1.id = 1 / it will not work
  readonly id: number;
  name: string;
  // question mark to make it optional
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// Function Interface //////////////////////////////////////////////////
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;

// Classes /////////////////////////////////////////////////////////////
class Person {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registred`;
  }
}

const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");

// Implement Interface in Class ////////////////////////////////////////////////////////
interface HumanInterface {
  id: number;
  name: string;
  register(): string;
}

class Human implements HumanInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `Hey, I am ${this.name}`;
  }
}
const franky = new Human(3, "Franky");

// Extending Classes (Subclasses) ///////////////////////////////////////////
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(5, "Dimi", "Software Developer");
console.log(emp.register());

// Generics /////////////////////////////////////////////////////////////////
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Brad", "John", "Jill"]);

numArray.push(1);
console.log(numArray);

/////////////////////////////////////////////////////////////////////////
// React /// React /// React /// React /// React /// React /// React ////
/////////////////////////////////////////////////////////////////////////

// How to run TypeScript in React
// write in terminal
// npx create-react-app . --template typescript
