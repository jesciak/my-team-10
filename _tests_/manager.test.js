const  Manager = require("../lib/Manager")


test("Test Manager is an Object",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(typeof(testManager)).toBe("object")
})

test("Test Manager - Name attribute",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.name).toBe("John")
})
test("Test Manager - Id attribute",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.id).toBe(8)
})
test("Test Manager-Email attribute",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.email).toBe("someone@email.com")
})

test("Test Manager- get name method",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.getName()).toBe("John")
})
test("Test Manager - get ID method",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.getId()).toBe(8)
})
test("Test Manager -get Email method",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.getEmail()).toBe("someone@email.com")
})
test("Test Manager-get role method",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.getRole()).toBe("Manager")
})
test("Test Manager- office number attribute",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.officeNumber).toBe(1)
})
test("Test Manager-get office number method",function(){
    const testManager = new Manager("John", 8, "someone@email.com", 1);
    expect(testManager.getOfficeNumber()).toBe(1)
})