// Remove code duplications -> you can use any type which is not recommended

// Ex create a func which takes an array of everything like number|string
// Fixing with generics
type GenericArray<T> = T[];

const genericFunc = <T>(data: GenericArray<T>): GenericArray<T> => {
  data.shift();
  return data;
};

// passing array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log(genericFunc<number>(numbers)); //Need to be fixed withn their type

// passing array of strings
const names = ["Alice", "Bob", "Charlie"];
console.log(genericFunc(names)); //Need to be fixed withn their type

// Using interface plus Generics

interface IGeneric<T, K> {
  name: T;
  age: K;
}

const genericObject: IGeneric<string, number> = { name: "John", age: 4 };

// using class based
class GenericClass<T, K> {
  name: T;
  age: K;

  // Initialize them
  constructor(name: T, age: K) {
    this.name = name;
    this.age = age;
  }
}

const date = new GenericClass<number, string>(2, "4");
