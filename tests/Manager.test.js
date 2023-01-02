const Manager =  require("../lib/Manager");

test("Can create a manager with an office number", () => {
    const officeNum = 123456789;
    const newManager = new Manager("Austin", 123456, '123@me.com', officeNum);
    expect(newManager.officeNumber).toBe(officeNum);
});
test("Should return Manager", () => {
    const role = 'Manager';
    const newManager = new Manager("Austin", 123456, '123@me.com', 123456789);
    expect(newManager.getRole()).toBe(role);
});
test("returns office number", () => {
    const officeNum = 123456789;
    const newManager = new Manager("Austin", 123456, '123@me.com', officeNum);
    expect(newManager.getOfficeNumber()).toBe(officeNum);
});
