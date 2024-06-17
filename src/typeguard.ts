//1. typeof guard
type AlphaNumeric = string | number;
const sum = (a: AlphaNumeric, b: AlphaNumeric) => {
  // Both parameters will be of type AlphaNumeric so then we can use typeof guard to check the type of the parameters
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid argument types");
};

//2. Instanceof Guard
class Banana {
  // Though tasty returns boolean
  isTasty(): boolean {
    return true;
  }
}

class Apple {
  isJuicy(): number {
    return 1;
  }
  returnName_Of_Fruit(): string {
    return "Apple";
  }
}

// Lets use those banana and apple classes as a type
type Checker = Apple | Banana;

const checkIfTasty = (fruit: Checker) => {
  // Here we can use instanceof guard to check if the object is an instance of the Banana class || Apple class based on our calling instanceof
  if (fruit instanceof Apple) {
    return fruit.returnName_Of_Fruit();
  }
  throw new Error("Not a banana");
};

//3. In Guard
// Checks out all function you'r using has a property with the name you're checking for

const checkForIn = (fruit: Checker): string => {
  if ("isJuicy" in fruit) {
    return `${fruit.isJuicy()}`;
  }
  return "Not an apple";
};
const apple = new Apple();

checkForIn(apple);

// 4. Equality Narrowing
// Its using equality operator to check the type of the object
const equalityCheck = (a: number) => {
  if (a === 1) {
    console.log("a", "a is a number and equals to 1");
  } else {
    throw new Error("Bad Type");
  }
};

// 5. user defining guard || using cautions ->predicates
// using is a function takes the parameter then assing the type
// ex for fruit we maight use fruit is Banana then we can use Banana func for fruit params likewise on apple
const isBanana = (fruit: Checker): fruit is Apple => {
  return "isJuicy" in fruit;
};

const bananaChecker = (f: Checker): string => {
  if (isBanana(f)) {
    // You cannot use isJuicy func because we already checked if the fruit is whether its banana or apple type
    f.isJuicy(); // correct
    // f.isJuicy() Not correct because f has a type of banana
    return "Its a banana";
  }
  return "Not a banana";
};
