// Inheritance is inheriting the parent class|| accessing the parent class
class Parent {
  name = "Tedy";

  GiveFullName() {
    return "Tedy" + " " + this.name;
  }
}

// Lets inherit Parent class for child class
class Child extends Parent {}
// Let initialize the child class and access the parent class data
const newChild = new Child();

console.log(newChild.GiveFullName());

// lets implement the Parent class -> Implements is included in typescript only
class NewChild implements Parent {
  // it should be same interms of having same behaviour with parent class
  // It should include name variable and a function calling give full name
  name: string = "Tedy";
  GiveFullName() {
    return "Tedy" + " " + this.name;
  }
}
