const Employee = require("../lib/Employee");


test("Creates an Employee Object", () => {
    const newEmployee = new Employee();
    expect(typeof (newEmployee)).toBe("object");
});
test("Creates an employee with a name", () => {
    const name = "Austin";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
});
test("Creates an employee with an id", () => {
    const id = 123456;
    const newEmployee = new Employee("Austin",id);
    expect(newEmployee.id).toBe(id);
});
test("Creates an employee with an email", () => {
    const email = "123@me.com";
    const newEmployee = new Employee("Austin", 123456, email);
    expect(newEmployee.email).toBe(email);
});
test("returns a name", () => {
    const name = "Austin";
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
});
test("returns an id", () => {
    const id = 123456;
    const newEmployee = new Employee("Austin",id);
    expect(newEmployee.getId()).toBe(id);
});
test("returns an email", () => {
    const email = "123@me.com";
    const newEmployee = new Employee("Austin", 123456, email);
    expect(newEmployee.getEmail()).toBe(email);
});
test("returns Employee", () => {
    const role = "Employee";
    const newEmployee = new Employee('Austin', 123456, '123@me.com');
    expect(newEmployee.getRole()).toBe(role);
});