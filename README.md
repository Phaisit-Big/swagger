# Generate swagger from postman
- Generate swagger file(.yml) from postman scripts
- Merge swagger from postman scripts in directory
## Install
    npm install
## Usage
    node posman.js --file=collection.json --output=collection.yml

| flag       | Description | Default | Require | 
| ----------- | ----------- |-----------|-----------|
| --file      | input file or directory path       ||true|
| --output   | output file path        |collection.yml|true|

## Options in posman script
- Header: Create from tab header in postman script
- Description request body: Create from tab pre-request in postman script
    require.request.rq_body.interest.interest_index = true
    description.response.rq_header = rq_header
    tags = interest,interest_index
    | level       | Description | |
    | ----------- | ----------- |----------- |
    | 1           | option (require,description and tags)| tags are defining by array, separate by comma |      
    | 2           | type of message (request and response)|
    |  > 3          | object path, separate level by dot |
- Response: Create from example and add description in body.

        {
            "description":"success status 200"
        }
