const Intern = require('../lib/intern');

describe("Intern", () => {
  describe("school", () => {
    it("should be able to get the school name of the intern", () => {
      const intern = new Intern('Andrew', '312', 'test@test.com', "University of Miami")
      expect(intern.school).toEqual('University of Miami')
    })
  })
});

describe("Intern", () => {
  describe("role", () => {
    it("should be able to get the role of the intern", () => {
      const intern = new Intern('Andrew', '312', 'test@test.com', "University of Miami")
      expect(intern.getRole()).toEqual('Intern')
    })
  })
});