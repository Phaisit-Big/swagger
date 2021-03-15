const postmanToOpenApi = require('postman-to-openapi')

const postmanCollection = 'collection.json'
const outputFile = 'collection.yml'

// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })