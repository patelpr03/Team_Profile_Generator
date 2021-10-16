const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Yogi", 90, "Yogi@gmail.com");

})

test("gets employee name", () => {
    const employee = new Employee("Yogi", 90, "Yogi@gmail.com");

    expect(employee.getName()).toBe("Yogi");
});

test("gets employee id", () => {
    const employee = new Employee("Yogi", 90, "Yogi@gmail.com");

    expect(employee.getId()).toBe(90);
});

test("gets employee email", () => {
    const employee = new Employee("Yogi", 90, "Yogi@gmail.com");

    expect(employee.getEmail()).toBe("Yogi@gmail.com");
});

test("gets employee role", () => {
    const employee = new Employee("Yogi", 90, "Yogi@gmail.com");

    expect(employee.getRole()).toBe("Employee");
    console.log(employee);
});