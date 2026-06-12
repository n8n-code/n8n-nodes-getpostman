import type { INodeProperties } from 'n8n-workflow';

export const environmentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					]
				}
			},
			"options": [
				{
					"name": "All Environments",
					"value": "All Environments",
					"action": "All Environments",
					"description": "The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..\n\nThe response contains an array of environments' information containing the `name`, `id`, `owner` and `uid` of each environment.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/environments"
						}
					}
				},
				{
					"name": "Create Environment",
					"value": "Create Environment",
					"action": "Create Environment",
					"description": "A sample body is added to the request that conforms to the following JSON schema:\n\n```json\n{\n  \"type\": \"object\",\n  \"properties\": {\n    \"environment\": {\n      \"type\": \"object\",\n      \"properties\": {\n        \"name\": {\n              \"type\": \"string\",\n              \"maxLength\": 254,\n              \"minLength\": 1\n            },\n        \"values\": {\n          \"type\": \"array\",\n          \"maxItems\": 100,\n          \"additionalItems\": false,\n          \"items\": {\n              \"type\": \"object\",\n              \"properties\": {\n                \"key\": {\n                  \"type\": \"string\",\n                  \"maxLength\": 254\n                  \"minLength\": 1\n                },\n                \"value\": { \"type\": \"string\" },\n                \"enabled\": { \"type\": \"boolean\" }\n              },\n              \"required\": [\"key\", \"value\"]\n            }\n        }\n      },\n      \"required\": [\"name\"]\n    }\n  },\n  \"required\": [\"environment\"]\n}\n```\n\nOn successful creation of the environment, the API returns the environment name and `id`.\n\nYou can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/environments"
						}
					}
				},
				{
					"name": "Delete Environment",
					"value": "Delete Environment",
					"action": "Delete Environment",
					"description": "This endpoint allows you to delete a single environment based on an environment's unique `uid`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/environments/{{$parameter[\"environment_uid\"]}}"
						}
					}
				},
				{
					"name": "Single Environment",
					"value": "Single Environment",
					"action": "Single Environment",
					"description": "Access the contents of an environment that is accessible to you using its unique id (`uid`).\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/environments/{{$parameter[\"environment_uid\"]}}"
						}
					}
				},
				{
					"name": "Update Environment",
					"value": "Update Environment",
					"action": "Update Environment",
					"description": "This endpoint replaces an existing environment.\n\nA sample body is added to the request that conforms to the following JSON schema:\n\n```json\n{\n\t\"type\": \"object\",\n\t\"properties\": {\n\t\t\"environment\": {\n\t\t\t\"type\": \"object\",\n\t\t\t\"properties\": {\n\t\t\t\t\"name\": {\n\t\t\t\t\t\"type\": \"string\",\n\t\t\t\t\t\"maxLength\": 254,\n\t\t\t\t\t\"minLength\": 1\n\t\t\t\t},\n\t\t\t\t\"values\": {\n\t\t\t\t\t\"type\": \"array\",\n\t\t\t\t\t\"maxItems\": 100,\n\t\t\t\t\t\"additionalItems\": false,\n\t\t\t\t\t\"items\": {\n\t\t\t\t\t\t\"type\": \"object\",\n\t\t\t\t\t\t\"properties\": {\n\t\t\t\t\t\t\t\"key\": {\n\t\t\t\t\t\t\t\t\"type\": \"string\",\n\t\t\t\t\t\t\t\t\"maxLength\": 254,\n\t\t\t\t\t\t\t\t\"minLength\": 1\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"value\": {\n\t\t\t\t\t\t\t\t\"type\": \"string\",\n\t\t\t\t\t\t\t\t\"maxLength\": 254,\n\t\t\t\t\t\t\t\t\"minLength\": 1\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"type\": {\n\t\t\t\t\t\t\t\t\"type\": \"string\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"enabled\": {\n\t\t\t\t\t\t\t\t\"type\": \"boolean\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"required\": [\n\t\t\t\t\t\t\t\"key\",\n\t\t\t\t\t\t\t\"value\"\n\t\t\t\t\t\t]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\t\"required\": [\n\t\t\"environment\"\n\t]\n}\n```\n\nOn successful updation of the environment, the API returns the environment name and `id`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/environments/{{$parameter[\"environment_uid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /environments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"All Environments"
					]
				}
			}
		},
		{
			"displayName": "POST /environments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Create Environment"
					]
				}
			}
		},
		{
			"displayName": "Environment",
			"name": "environment",
			"type": "json",
			"default": "{\n  \"name\": \"Sample Environment Name (required)\",\n  \"values\": [\n    {\n      \"key\": \"variable_name_1\",\n      \"value\": \"The value of the variable\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "environment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Create Environment"
					]
				}
			}
		},
		{
			"displayName": "DELETE /environments/{environment_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Delete Environment"
					]
				}
			}
		},
		{
			"displayName": "GET /environments/{environment_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Single Environment"
					]
				}
			}
		},
		{
			"displayName": "PUT /environments/{environment_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Update Environment"
					]
				}
			}
		},
		{
			"displayName": "Environment",
			"name": "environment",
			"type": "json",
			"default": "{\n  \"name\": \"New Name\",\n  \"values\": [\n    {\n      \"key\": \"name\",\n      \"value\": \"Bruce Wayne\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "environment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Environments"
					],
					"operation": [
						"Update Environment"
					]
				}
			}
		},
];
