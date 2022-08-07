// Licenses variable
const licenses = {
  Apache: {
    markdown: "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    url: "https://opensource.org/licenses/Apache-2.0"
  },
  Boost: {
    markdown: "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)",
    url: "https://www.boost.org/LICENSE_1_0.txt"
  },
  BSD: {
    markdown: "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    url: "https://opensource.org/licenses/BSD-3-Clause"
  },
  Eclipse: {
    markdown: "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)",
    url: "https://opensource.org/licenses/EPL-1.0"
  },
  GNU: {
    markdown: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    url: "https://www.gnu.org/licenses/gpl-3.0"
  },
  ISC: {
    markdown: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",
    url: "(https://opensource.org/licenses/ISC)"
  },
  MIT: {
    markdown: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    url: "https://opensource.org/licenses/MIT"
  },
  None: {
    markdown: '',
    url: ''
  },
};

// Function that returns a license badge based on which license is passed in - If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `${licenses[license].markdown}`
};

// Function that returns the license link - If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `${licenses[license].url}`
};

// Function that returns the license section of README - If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {

  const { license } = data;

  // README template
  return (`
  # ${data.title}

  ${renderLicenseBadge(license)}

  ## Description
   
  ${data.description}

  ## Table of Contents  
  * [Description](#description)
  * [Technologies](#technologies)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#License)
  * [Questions](#questions)
  
  ## Technologies

  ${data.technologies}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests
  
  ${data.test}

  ## License

  * Licensed through the [${data.license}](${renderLicenseLink(license)}) license.

  ## Questions

  Here is my GitHub Profile: [${data.github}](http://github.com/${data.github})

  Have any questions? Email me here: [${data.email}](mailto:${data.email})
`);
}

// Export for External
module.exports = generateMarkdown;