enum School { // Enum Returns a number depending also not optimized enum
  Student,
  Teacher
}
// hetergenous Type -> In every enum all types should be behave same type
// Accessing || Give the enum to User
// Typescript wont satisfied if they is differ types inised
const user = {
  name: "",
  role: School.Student | School.Teacher
};

console.log("Logs", {
  teacher: School.Teacher, // 0
  Student: School.Student // 1
});

// Enum Optimization
// Declare the enum with constant
const enum Roles {
  Admin = "Admin",
  User = 1
}
console.log("Logs", {
  Admin: Roles.Admin
});
