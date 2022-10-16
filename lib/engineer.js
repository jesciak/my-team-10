const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github= github;
    }
    getGithub(){
        return <a href="https://github.com/${this.github}">${this.github}</a>;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports= Engineer;