const Intern = require("../lib/Intern");

test("Can create an intern with a school", () => {
    const school = 'Iowa';
    const newIntern = new Intern("Austin", 123456, '123@me.com', school);
    expect(newIntern.school).toBe(school);
});
test("Should return 'Intern'", () => {
    const role = "Intern";
    const newIntern = new Intern("Austin", 123456, '123@me.com', "Iowa");
    expect(newIntern.getRole()).toBe(role);
});
test("returns school", () => {
    const school = 'Iowa';
    const newIntern = new Intern("Austin", 123456, '123@me.com', school);
    expect(newIntern.getSchool()).toBe(school);
});