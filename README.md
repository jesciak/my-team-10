# My Team

 ![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)
## Table of Contents 

- [Overview](#overview)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Links](#links)

## Overview

**User Story**<br>

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

**Acceptance Criteria**<br>

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Description
A node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Installation

This application runs using Node JS. You will need to NPM install Inquirer and Jest then run the application from the command line. 

## Usage


 ![screenshot](./assets/images/Untitled_%20Nov%2015%2C%202022%2011_23%20PM.gif)
 
## License
MIT License
  http://choosealicense.com/licenses/mit/<br>

## Contributors

[@jesciak](https://github.com/jesciak/)

## Links
- [Github Repo](https://github.com/jesciak/my-team-10.git)

- [Video Demo](https://drive.google.com/file/d/1zalwrmWeOiD6dCcFmXHdEdw_EMFqKvJ0/view)
