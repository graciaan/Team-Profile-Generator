const Engineer = require('../lib/engineer');

describe("Engineer", () => {
  describe("github", () => {
    it("should be able to get the gitHub name of the engineer", () => {
      const engineer = new Engineer('Andrew', '312', 'test@test.com', "graciaan")
      expect(engineer.github).toEqual('graciaan')
    })
  })
});

describe("Engineer", () => {
  describe("role", () => {
    it("should be able to get the role of the engineer", () => {
      const engineer = new Engineer('Andrew', '312', 'test@test.com', "graciaan")
      expect(engineer.getRole()).toEqual('Engineer')
    })
  })
});