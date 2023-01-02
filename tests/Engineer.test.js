const { it } = require("node:test");
const { describe } = require("yargs");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can create a manager with a github username", () => {
        const github = 'awgore99'
        const newEngineer = new Engineer(github);
        expect(newEngineer.github).toBe(github);
    });
});
describe("getRole", () => {
    it("Should return Engineer", () => {
        const role = "Engineer";
        const newEmployee = new Engineer('Austin', 123456, '123@me.com', 'awgore99');
        expect(newEmployee.getRole()).toBe(role);
    });
});
describe('getGitHub', () => {
    it('returns github username', () => {
        const github = 'awgore99'
        const newEngineer = new Engineer(github);
        expect(newEngineer.getGitHub()).toBe(github);
    });
});