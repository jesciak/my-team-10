const  Employee = require("../lib/Employee")


test("Test Employee is an Object",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(typeof(testEmployee)).toBe("object")
})

test("Test Employee - Name attribute",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(testEmployee.name).toBe("John")
})
test("Test Employee - Id attribute",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(testEmployee.id).toBe(8)
})
test("Test Employee -Email attribute",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(testEmployee.email).toBe("someone@email.com")
})

test("Test Employee - get name method",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(testEmployee.getName()).toBe("John")
})
test("Test Employee - get ID method",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(testEmployee.getId()).toBe(8)
})
test("Test Employee -get Email method",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(testEmployee.getEmail()).toBe("someone@email.com")
})
test("Test Employee -get role method",function(){
    const testEmployee = new Employee("John", 8, "someone@email.com");
    expect(testEmployee.getRole()).toBe("Employee")
})