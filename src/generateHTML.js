const path = require("path");

const fs = require('fs')

function insertValue(template, valueName, value){
    let reg= new RegExp(`{{ ${valueName}}}`, 'g')
    return template.replace(reg, value)

}


function render(teamMembers){
    // console.log('team members', teamMembers)
    let outputHTML = ''
    for (const member of teamMembers) {
        console.log('MEMBERS ',member)
        // const OUTPUT_DIR= path.resolve(__dirname, "dist");
        const outputPath = path.join(__dirname, "../dist");

        let data = fs.readFileSync(outputPath, '')
        data =insertValue(data, 'name', member.getName())
        outputHTML+= data
    }

    let templatePath = path.resolve(__dirname, '../dist/index.html')
    let mainData = fs.readFileSync(templatePath, 'utf-8')

    return insertValue(mainData, 'team', outputHTML)
}



module.exports = render;