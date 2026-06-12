import type { INodeProperties } from 'n8n-workflow';

export const relationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					]
				}
			},
			"options": [
				{
					"name": "Get Contract Test Relations",
					"value": "Get Contract Test Relations",
					"action": "Get contract test relations",
					"description": "This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/contracttest"
						}
					}
				},
				{
					"name": "Get Documentation Relations",
					"value": "Get Documentation Relations",
					"action": "Get  documentation relations",
					"description": "This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/documentation"
						}
					}
				},
				{
					"name": "Get Environment Relations",
					"value": "Get Environment Relations",
					"action": "Get environment relations",
					"description": "This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/environment"
						}
					}
				},
				{
					"name": "Get Integration Test Relations",
					"value": "Get Integration Test Relations",
					"action": "Get integration test relations",
					"description": "This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/integrationtest"
						}
					}
				},
				{
					"name": "Get Monitor Relations",
					"value": "Get Monitor Relations",
					"action": "Get monitor relations",
					"description": "This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/monitor"
						}
					}
				},
				{
					"name": "Get Linked Relations",
					"value": "Get Linked Relations",
					"action": "Get linked relations",
					"description": "This call fetches all the relations which are linked to the specified API version along with their details.\n\nThe response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. \n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/relations"
						}
					}
				},
				{
					"name": "Create Relations",
					"value": "Create Relations",
					"action": "Create relations",
					"description": "This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. \n\n<table>\n  <tr>\n    <th>Relation</th>\n    <th>Entity ID type</th>\n  <tr>\n  <tr>\n    <td>contracttest</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>integrationtest</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>documentation</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>testsuite</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>environment</td>\n    <td>Environment UIDs</td>\n  </tr>\n  <tr>\n    <td>mock</td>\n    <td>Mock IDs</td>\n  </tr>\n  <tr>\n    <td>monitor</td>\n    <td>Monitor IDs</td>\n  </tr>\n</table>\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/relations"
						}
					}
				},
				{
					"name": "Get Test Suite Relations",
					"value": "Get Test Suite Relations",
					"action": "Get test suite relations",
					"description": "This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/testsuite"
						}
					}
				},
				{
					"name": "Sync Relations With Schema",
					"value": "Sync Relations With Schema",
					"action": "Sync relations with schema",
					"description": "This call allows you to keep the relation in sync with the API schema.\n\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/{{$parameter[\"entityType\"]}}/{{$parameter[\"entityId\"]}}/syncWithSchema"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/contracttest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Get Contract Test Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/documentation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Get Documentation Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/environment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Get Environment Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/integrationtest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Get Integration Test Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/monitor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Get Monitor Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Get Linked Relations"
					]
				}
			}
		},
		{
			"displayName": "POST /apis/{apiId}/versions/{apiVersionId}/relations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Create Relations"
					]
				}
			}
		},
		{
			"displayName": "Contracttest",
			"name": "contracttest",
			"type": "json",
			"default": "[\n  \"collection-uid-1\"\n]",
			"routing": {
				"send": {
					"property": "contracttest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Create Relations"
					]
				}
			}
		},
		{
			"displayName": "Documentation",
			"name": "documentation",
			"type": "json",
			"default": "[\n  \"collection-uid-3\"\n]",
			"routing": {
				"send": {
					"property": "documentation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Create Relations"
					]
				}
			}
		},
		{
			"displayName": "Mock",
			"name": "mock",
			"type": "json",
			"default": "[\n  \"mock-uid-1\"\n]",
			"routing": {
				"send": {
					"property": "mock",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Create Relations"
					]
				}
			}
		},
		{
			"displayName": "Testsuite",
			"name": "testsuite",
			"type": "json",
			"default": "[\n  \"collection-uid-1\"\n]",
			"routing": {
				"send": {
					"property": "testsuite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Create Relations"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/testsuite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Get Test Suite Relations"
					]
				}
			}
		},
		{
			"displayName": "PUT /apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relations"
					],
					"operation": [
						"Sync Relations With Schema"
					]
				}
			}
		},
];
