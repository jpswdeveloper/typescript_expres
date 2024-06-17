var School;
(function (School) {
    School[School["Student"] = 0] = "Student";
    School[School["Teacher"] = 1] = "Teacher";
})(School || (School = {}));
// hetergenous Type -> In every enum all types should be behave same type
// Accessing || Give the enum to User
// Typescript wont satisfied if they is differ types inised
var user = {
    name: "",
    role: School.Student | School.Teacher
};
console.log("Logs", {
    teacher: School.Teacher, // 0
    Student: School.Student // 1
});
console.log("Logs", {
    Admin: "Admin" /* Roles.Admin */
});
