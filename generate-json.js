'use strict';

const SWAGGER_API_HOST = process.env.SWAGGER_API_HOST || 'localhost';
const SWAGGER_API_PORT = process.env.SWAGGER_API_PORT || false;
const SWAGGER_API_BASE_PATH = process.env.SWAGGER_API_BASE_PATH || '/api';
const SWAGGER_API_SCHEME = process.env.SWAGGER_API_SCHEME || 'http';

const resolve = require('json-refs').resolveRefs;
const YAML = require('yaml-js');
const fs = require('fs');
const jsonfile = require('jsonfile');

const inputFilename = 'api-index.yaml';
const outputFilename = 'api/build/latest.json';

const root = YAML.load(fs.readFileSync(inputFilename).toString());

const options = {
    filter: ['relative', 'remote'],
    loaderOptions: {
        processContent: (res, callback) => {
            callback(null, YAML.load(res.text));
        }
    }
};

const stringifyOptions = {
    spaces: 2
};

resolve(root, options).then(results => {
    const result = results.resolved;

    result.host = SWAGGER_API_HOST + (SWAGGER_API_PORT ? `:${SWAGGER_API_PORT}` : '');
    result.basePath = SWAGGER_API_BASE_PATH;
    result.schemes = [SWAGGER_API_SCHEME];

    jsonfile.writeFile(outputFilename, result, stringifyOptions, err => {
        if (err != null) {
            console.error(err)
        } else {
            console.log('JSON has been generated!');
        }
    })
});
