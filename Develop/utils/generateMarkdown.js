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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
