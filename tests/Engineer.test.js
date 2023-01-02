const Engineer = require("../lib/Engineer");

test("Can create an engineer with a github username", () => {
    const github = 'awgore99'
    const newEngineer = new Engineer('Austin', 123456, '123@me.com', github);
    expect(newEngineer.github).toBe(github);
});
test("Should return Engineer", () => {
    const role = "Engineer";
    const newEmployee = new Engineer('Austin', 123456, '123@me.com', 'awgore99');
    expect(newEmployee.getRole()).toBe(role);
});
test('returns github username', () => {
    const github = 'awgore99'
    const newEngineer = new Engineer('Austin', 123456, '123@me.com',github);
    expect(newEngineer.getGitHub()).toBe(github);
});
