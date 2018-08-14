const swaggerConverter = require('swagger-converter');
const fs = require('fs');

const resourceListing = require('api-1.0.json');

const apiDeclarations = {};

const swagger2Document = swaggerConverter.convert(resourceListing, apiDeclarations);
const json = JSON.stringify(swagger2Document, null, 2);
fs.writeFile('api-2.0.json', json, 'utf8', () => {});