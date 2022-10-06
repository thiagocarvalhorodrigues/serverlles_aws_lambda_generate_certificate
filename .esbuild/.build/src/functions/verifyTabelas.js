var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/functions/verifyTabelas.ts
var verifyTabelas_exports = {};
__export(verifyTabelas_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(verifyTabelas_exports);

// src/utils/dynamodbClients.ts
var import_aws_sdk = require("aws-sdk");
var options = {
  region: "localhost",
  endpoint: "http://localhost:8000"
};
var isOffline = () => {
  return process.env.IS_OFFLINE;
};
var document = isOffline() ? new import_aws_sdk.DynamoDB.DocumentClient(options) : new import_aws_sdk.DynamoDB.DocumentClient();

// src/functions/verifyTabelas.ts
var handler = async (event) => {
  const { id } = event.pathParameters;
  const response = await document.query({
    TableName: "tabela",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();
  const userCertificate = response.Items[0];
  if (userCertificate) {
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: " Certificado v\xE1lido",
        name: userCertificate.name,
        url: `https://certificatethiago.s3.amazonaws.com/${id}.pdf`
      })
    };
  }
  ;
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: " Certificado inv\xE1lido"
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=verifyTabelas.js.map
