import type { INodeProperties } from 'n8n-workflow';

export const importDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					]
				}
			},
			"options": [
				{
					"name": "Import Exported Data",
					"value": "Import Exported Data",
					"action": "Import exported data",
					"description": "This endpoint allows you to import your exported Postman data.\nFor more information about how you can export your data, refer <a href=\"https://go.postman.co/me/export\">Export your Postman data.</a>\n\nOn successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.\n\n**Note**: Refer to examples for different scenarios.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/import/exported"
						}
					}
				},
				{
					"name": "Import External API Specification",
					"value": "Import External API Specification",
					"action": "Import external API specification",
					"description": "This endpoint allows you to import external API specifications into Postman.\n\nCurrently, this endpoint only supports the <a href=\"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md\">OpenAPI</a> specification, for which the `importType` will be `openapi`.\n\nOn a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.\n\nSupported `type`s:\n\n- string\n- json\n- file\n\nThe `input` parameter should be defined based on the `type`.\n\n> To import a file, request body must be form-data with `type` param set to `file`.\n\n**Note**: Refer to examples for different scenarios.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/import/openapi"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /import/exported",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Import Exported Data"
					]
				}
			}
		},
		{
			"displayName": "POST /import/exported<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Import Exported Data"
					]
				}
			}
		},
		{
			"displayName": "POST /import/openapi",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Import External API Specification"
					]
				}
			}
		},
		{
			"displayName": "Input",
			"name": "input",
			"type": "json",
			"default": "{\n  \"info\": {\n    \"license\": {\n      \"name\": \"MIT\"\n    },\n    \"title\": \"Swagger Petstore\",\n    \"version\": \"1.0.0\"\n  },\n  \"openapi\": \"3.0.0\",\n  \"paths\": {\n    \"/pets\": {\n      \"get\": {\n        \"operationId\": \"listPets\",\n        \"parameters\": [\n          {\n            \"description\": \"limit\",\n            \"in\": \"query\",\n            \"name\": \"limit\",\n            \"required\": false,\n            \"schema\": {\n              \"format\": \"int32\",\n              \"type\": \"integer\"\n            }\n          }\n        ],\n        \"responses\": {\n          \"default\": {\n            \"content\": {\n              \"application/json\": {\n                \"schema\": {\n                  \"properties\": {\n                    \"code\": {\n                      \"format\": \"int32\",\n                      \"type\": \"integer\"\n                    },\n                    \"message\": {\n                      \"type\": \"string\"\n                    }\n                  },\n                  \"required\": [\n                    \"code\"\n                  ]\n                }\n              }\n            },\n            \"description\": \"unexpected error\"\n          }\n        },\n        \"summary\": \"List all pets\"\n      }\n    }\n  },\n  \"servers\": [\n    {\n      \"url\": \"http://petstore.swagger.io/v1\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "input",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Import External API Specification"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "json",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Import External API Specification"
					]
				}
			}
		},
];
