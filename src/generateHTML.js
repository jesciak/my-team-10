const path = require("path");

const fs = require('fs')
const mainDataDir = path.resolve(__dirname, "../dist");

const render = teamMembers => {
    const html = [];
    html.push(teamMembers.filter(employee => employee.getRole() === 'Manager').map(manager => renderManager(manager)));
    html.push(teamMembers.filter(employee => employee.getRole() === 'Engineer').map(engineer => renderEngineer(engineer)));
    html.push(teamMembers.filter(employee => employee.getRole() === 'Intern').map(intern => renderIntern(intern)));

    return renderMain(html.join(''));
};

const renderManager = manager => {
    let mainData = fs.readFileSync(path.resolve(mainDataDir, 'manager.html'), 'utf8');
    mainData = insertValue(mainData, 'name', manager.getName());
    mainData = insertValue(mainData, 'role', manager.getRole());
    mainData = insertValue(mainData, 'id', manager.getId());
    mainData = insertValue(mainData, 'email', manager.getEmail());
    mainData = insertValue(mainData, 'officeNumber', manager.getOfficeNumber());
    return mainData;
};
const renderEngineer = engineer => {
    let mainData = fs.readFileSync(path.resolve(mainDataDir, 'engineer.html'), 'utf8');
    mainData = insertValue(mainData, 'name', engineer.getName());
    mainData = insertValue(mainData, 'role', engineer.getRole());
    mainData = insertValue(mainData, 'id', engineer.getId());
    mainData = insertValue(mainData, 'email', engineer.getEmail());
    mainData = insertValue(mainData, 'github', engineer.getGithub());
    return mainData;
};
const renderIntern = intern => {
    let mainData = fs.readFileSync(path.resolve(mainDataDir, 'intern.html'), 'utf8');
    mainData = insertValue(mainData, 'name', intern.getName());
    mainData = insertValue(mainData, 'role', intern.getRole());
    mainData = insertValue(mainData, 'id', intern.getId());
    mainData = insertValue(mainData, 'email', intern.getEmail());
    mainData = insertValue(mainData, 'school', intern.getSchool());
    return mainData;
}

// function insertValue(template, valueName, value) {
//     let reg = new RegExp(`{{ ${valueName}}}`, 'g')
//     return template.insertValue(reg, value)

// }

const renderMain = html => {
    const mainData = fs.readFileSync(path.resolve(mainDataDir, 'main.html'), 'utf8');
    return insertValue(mainData, 'team', html)
};
const insertValue = (mainData, valueName, value) => {
    const reg = new RegExp(`{{ ${valueName} }}`, 'g');
    return mainData.replace(reg, value)
}


module.exports = render;