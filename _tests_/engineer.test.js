const  Engineer = require("../lib/Engineer")


test("Test Engineer is an Object",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(typeof(testEngineer)).toBe("object")
})

test("Test Engineer - Name attribute",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.name).toBe("John")
})
test("Test Engineer - Id attribute",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.id).toBe(8)
})
test("Test Engineer-Email attribute",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.email).toBe("someone@email.com")
})

test("Test Engineer- get name method",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.getName()).toBe("John")
})
test("Test Engineer - get ID method",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.getId()).toBe(8)
})
test("Test Engineer -get Email method",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.getEmail()).toBe("someone@email.com")
})
test("Test Engineer-get role method",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.getRole()).toBe("Engineer")
})
test("Test Engineer-github attribute",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.github).toBe("johngithub")
})
test("Test Engineer-get github method",function(){
    const testEngineer = new Engineer("John", 8, "someone@email.com", "johngithub");
    expect(testEngineer.getGithub()).toBe('<a href="https://github.com/johngithub">johngithub</a>')
})