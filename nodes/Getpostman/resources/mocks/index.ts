import type { INodeProperties } from 'n8n-workflow';

export const mocksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					]
				}
			},
			"options": [
				{
					"name": "All Mocks",
					"value": "All Mocks",
					"action": "All Mocks",
					"description": "This endpoint fetches all the mocks that you have created.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mocks"
						}
					}
				},
				{
					"name": "Create Mock",
					"value": "Create Mock",
					"action": "Create Mock",
					"description": "This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.\n\nYou can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mocks"
						}
					}
				},
				{
					"name": "Delete Mock",
					"value": "Delete Mock",
					"action": "Delete Mock",
					"description": "This endpoint allows you to delete an existing mock using its `uid`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/mocks/{{$parameter[\"mock_uid\"]}}"
						}
					}
				},
				{
					"name": "Single Mock",
					"value": "Single Mock",
					"action": "Single Mock",
					"description": "This endpoint fetches you the basic information about a single mock using its `uid`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mocks/{{$parameter[\"mock_uid\"]}}"
						}
					}
				},
				{
					"name": "Update Mock",
					"value": "Update Mock",
					"action": "Update Mock",
					"description": "This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,\n* name\n* environment\n* description\n* private\n* versionTag\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/mocks/{{$parameter[\"mock_uid\"]}}"
						}
					}
				},
				{
					"name": "Publish Mock",
					"value": "Publish Mock",
					"action": "Publish Mock",
					"description": "This endpoint publishes the mock you have created using its `uid`\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mocks/{{$parameter[\"mock_uid\"]}}/publish"
						}
					}
				},
				{
					"name": "Unpublish Mock",
					"value": "Unpublish Mock",
					"action": "Unpublish Mock",
					"description": "This endpoint unpublishes the mock you have created using its `uid`\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/mocks/{{$parameter[\"mock_uid\"]}}/unpublish"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /mocks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					],
					"operation": [
						"All Mocks"
					]
				}
			}
		},
		{
			"displayName": "POST /mocks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					],
					"operation": [
						"Create Mock"
					]
				}
			}
		},
		{
			"displayName": "Mock",
			"name": "mock",
			"type": "json",
			"default": "{\n  \"collection\": \"1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc\",\n  \"environment\": \"1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524\"\n}",
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
						"Mocks"
					],
					"operation": [
						"Create Mock"
					]
				}
			}
		},
		{
			"displayName": "DELETE /mocks/{mock_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					],
					"operation": [
						"Delete Mock"
					]
				}
			}
		},
		{
			"displayName": "GET /mocks/{mock_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					],
					"operation": [
						"Single Mock"
					]
				}
			}
		},
		{
			"displayName": "PUT /mocks/{mock_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					],
					"operation": [
						"Update Mock"
					]
				}
			}
		},
		{
			"displayName": "Mock",
			"name": "mock",
			"type": "json",
			"default": "{\n  \"description\": \"example describing update mock description\",\n  \"environment\": \"11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19\",\n  \"name\": \"My Mock Server\",\n  \"private\": false,\n  \"versionTag\": \"abf07d3d-f8ec-47d4-8015-9fe83078b4ec\"\n}",
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
						"Mocks"
					],
					"operation": [
						"Update Mock"
					]
				}
			}
		},
		{
			"displayName": "POST /mocks/{mock_uid}/publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					],
					"operation": [
						"Publish Mock"
					]
				}
			}
		},
		{
			"displayName": "DELETE /mocks/{mock_uid}/unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mocks"
					],
					"operation": [
						"Unpublish Mock"
					]
				}
			}
		},
];
