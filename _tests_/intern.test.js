const  Intern = require("../lib/Intern")


test("Test Intern is an Object",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(typeof(testIntern)).toBe("object")
})

test("Test Intern - Name attribute",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.name).toBe("John")
})
test("Test Intern - Id attribute",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.id).toBe(8)
})
test("Test Intern-Email attribute",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.email).toBe("someone@email.com")
})

test("Test Intern- get name method",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.getName()).toBe("John")
})
test("Test Intern - get ID method",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.getId()).toBe(8)
})
test("Test Intern -get Email method",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.getEmail()).toBe("someone@email.com")
})
test("Test Intern-get role method",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.getRole()).toBe("Intern")
})
test("Test Intern- school attribute",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.school).toBe("thisuniversity")
})
test("Test Intern-get school method",function(){
    const testIntern = new Intern("John", 8, "someone@email.com", "thisuniversity");
    expect(testIntern.getSchool()).toBe("thisuniversity")
})