class Emplooye {
  // use private and protected
  private _name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this.age = age;
  }

  GetAge(age: number): string {
    return `${this._name} is ${this.age} years old`;
  }
}

// accessing the private from Emplooye is not possible
// changing the private to public breaks the scenario but use a function which lets the information publicly is Good

const dataToPreview = new Emplooye("TEDY", 26);

// console.log(dataToPreview._name); Property '_name' is private and only accessible within class 'Emplooye'
console.log(dataToPreview.GetAge(26)); // Correct
// console.log(dataToPreview.age); // Property 'age' is protected and only accessible within class 'Emplooye' and its subclasses

// for protected variable you can inherit from the parent class
class Manager extends Emplooye {
  constructor(name: string, age: number) {
    super(name, age);
  }
  GetAge(age: number): string {
    // return `${this._name} is ${this.age} years old`; // Now _name is still an accessible inside subclass due to ts private || Incorrect
    return `${this.age} years old`; // Now _name is still an accessible inside subclass due to ts private || Incorrect
  }
}
