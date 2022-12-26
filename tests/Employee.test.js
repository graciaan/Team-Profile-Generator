const Employee = require('../lib/employee');

describe("Employee", () => {
  describe("name", () => {
    it("should be able to get the name of the employee", () => {
      const employee = new Employee('Andrew', '312', 'test@test.com')
      expect(employee.name).toEqual('Andrew')
    })
  })
});

describe("Employee", () => {
  describe("id", () => {
    it("should be able to get the ID of the employee", () => {
      const employee = new Employee('Andrew', '312', 'test@test.com')
      expect(employee.id).toEqual('312')
    })
  })
});

describe("Employee", () => {
  describe("email", () => {
    it("should be able to get the email of the employee", () => {
      const employee = new Employee('Andrew', '312', 'test@test.com')
      expect(employee.email).toEqual('test@test.com')
    })
  })
})