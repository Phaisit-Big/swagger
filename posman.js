const postmanToOpenApi = require('postman-to-openapi')
const flags = require('flags');

flags.defineString('file', '', 'input file or directory path');
flags.defineString('output', 'collection.yml', 'output path');
flags.parse();

postmanToOpenApi(flags.get('file')?flags.get('file'):"collection.json", flags.get('output'), { defaultTag: 'General' })
.then(result => {
    // console.log(`OpenAPI specs: ${result}`)
})
.catch(err => {
    console.log(err)
})