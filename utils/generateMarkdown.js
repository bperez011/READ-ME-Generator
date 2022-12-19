// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license === "MIT" || license ==="GPL" || license === "cc-0" ) { 
    return `
      ![License:${license}](https://img.shields.io/badge/license-${license}-green)
    `
  }
  return 'none'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license && license === "MIT" || license ==="GPL" || license === "cc-0") {
    return `
      [click here to see license](https://opensource.org/licenses/MIT)    
    `
  }
  return 'none'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license && license === "MIT" || license === "GPL" || license === "cc-0") {

    return `
      ___This Project is Licensed Under The ${license}.___ 
  `
  }
  return '___This Project is unlicensed.___'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  ${renderLicenseSection(data.licenses)}
  ${renderLicenseLink(data.licenses)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;