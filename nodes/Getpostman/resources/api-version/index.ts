import type { INodeProperties } from 'n8n-workflow';

export const apiVersionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					]
				}
			},
			"options": [
				{
					"name": "Get All API Versions",
					"value": "Get All API Versions",
					"action": "Get All API Versions",
					"description": "This call fetches details about the all the API Versions in the specified API.\n\nThe response will contain an array `versions` object which would be a list of all the API Version along with their details.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions"
						}
					}
				},
				{
					"name": "Create API Version",
					"value": "Create API Version",
					"action": "Create API Version",
					"description": "This call creates a new API version in the specified API.  \n\nRequest body should contain a `version` object which should have fields:\n\n<table>\n<tr>\n\t<td>name</td>\n\t<td>Required. Name of the API Version</td>\n</tr>\n<tr>\n\t<td>source</td>\n\t<td>\n\t\tIf specified, it will copy the contents of the specified api version to create a new api verison.\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<td>id</td>\n\t\t\t\t<td>Required. Id of the apiversion from where the details are to be copied</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>schema</td>\n\t\t\t\t<td>Boolean. If true then copies the schema from the specified api version</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>relations</td>\n\t\t\t\t<td>Object. {\"&lt;relationType&gt;\": true/false}.  \n\t\t\t\t\tAllowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`\n\t\t\t\tRelation types which should be copied over to the new api verison</td>\n\t\t\t</tr>\n\t\t</table>\n\t</td>\n</tr>\n</table>\n\nResponse contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions"
						}
					}
				},
				{
					"name": "Delete An API Version",
					"value": "Delete An API Version",
					"action": "Delete an API Version",
					"description": "This call deletes an existing API Version having the specified id.  \n\nResponse contains an `version` object with `id` of the API Version which was deleted.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}"
						}
					}
				},
				{
					"name": "Get An API Version",
					"value": "Get An API Version",
					"action": "Get an API Version",
					"description": "This call fetches details about the specified API Version.\n\nThe response will contain a `version` object which would contain all the details of the API Version.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}"
						}
					}
				},
				{
					"name": "Update An API Version",
					"value": "Update An API Version",
					"action": "Update an API Version",
					"description": "This call updates an existing API Version.  \n\nRequest body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.\n\nResponse contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /apis/{apiId}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					],
					"operation": [
						"Get All API Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /apis/{apiId}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					],
					"operation": [
						"Create API Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "json",
			"default": "{\n  \"name\": \"1.0\",\n  \"source\": {\n    \"id\": \"{{apiVersionId}}\",\n    \"relations\": {\n      \"documentation\": true,\n      \"mock\": true,\n      \"monitor\": true\n    },\n    \"schema\": true\n  }\n}",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					],
					"operation": [
						"Create API Version"
					]
				}
			}
		},
		{
			"displayName": "DELETE /apis/{apiId}/versions/{apiVersionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					],
					"operation": [
						"Delete An API Version"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					],
					"operation": [
						"Get An API Version"
					]
				}
			}
		},
		{
			"displayName": "PUT /apis/{apiId}/versions/{apiVersionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					],
					"operation": [
						"Update An API Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "json",
			"default": "{\n  \"name\": \"2.0\"\n}",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Version"
					],
					"operation": [
						"Update An API Version"
					]
				}
			}
		},
];
