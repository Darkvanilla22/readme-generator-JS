// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Function to render a license badge, link, and section based on the license type
function renderLicense(license) {
  if (!license) return { badge: '', link: '', section: '' };
  const badge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  const link = `[License](https://opensource.org/licenses/${license})`;
  const section = `## License

This project is licensed under the ${license} license. See the [${license} license](${link}) for more details.
`;
  return { badge, link, section };
}

// TODO: Create a function to generate markdown for README

// Function to generate markdown for README
function generateMarkdown(data) {
  const { badge, section } = renderLicense(data.license);
  return `# ${data.title}

${badge}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${section}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about this project, please visit my [GitHub profile](https://github.com/${data.github}), or feel free to [email me](mailto:${data.email}) with any additional questions.
`;
}

module.exports = generateMarkdown;
