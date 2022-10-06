# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npm deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service

### Locally

In order to test the tabela and verifyCertificate function locally, run the following command:

Create certificate:

- `npm run dev --path src/functions/dev/tabela` if you're using NPM
 
- `yarn dev --path src/functions/dev/tabela` if you're using Yarn

![image](https://user-images.githubusercontent.com/23345809/194385307-34fa930d-b1fc-4df8-a3e2-2bd999f81941.png)

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
## Create Certificate

    curl --request POST \
  --url http://myApiEndpoint/dev/tabela \
  --header 'Content-Type: application/json' \
  --cookie PHPSESSID=e81oc6ggljntfevnraf8diur57 \
  --data '{
	"id": "Insert UUID",
	"name": "BEATRIZ",
	"grade": "10"	
}'

### Verifiy Certificate
curl --request GET \
  --url https://madz4c6uhi.execute-api.us-east-1.amazonaws.com/dev/veriryTabelas/UUID


```
