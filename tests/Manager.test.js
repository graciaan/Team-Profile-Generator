const Manager = require('../lib/manager');

describe("Manager", () => {
  describe("officeNumber", () => {
    it("should be able to get the office number of the manager", () => {
      const manager = new Manager('Andrew', '312', 'test@test.com', "305-555-5555")
      expect(manager.officeNumber).toEqual('305-555-5555')
    })
  })
});

describe("Manager", () => {
  describe("role", () => {
    it("should be able to get the role of the Manager", () => {
      const manager = new Manager('Andrew', '312', 'test@test.com', "305-555-5555")
      expect(manager.getRole()).toEqual('Manager')
    })
  })
});