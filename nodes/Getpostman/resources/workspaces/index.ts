import type { INodeProperties } from 'n8n-workflow';

export const workspacesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					]
				}
			},
			"options": [
				{
					"name": "All Workspaces",
					"value": "All Workspaces",
					"action": "All workspaces",
					"description": "The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.\n\nThe response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/workspaces"
						}
					}
				},
				{
					"name": "Create Workspace",
					"value": "Create Workspace",
					"action": "Create Workspace",
					"description": "This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.\n\nOn successful creation of the workspace, the response returns the workspcae `name` and `id`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/workspaces"
						}
					}
				},
				{
					"name": "Delete Workspace",
					"value": "Delete Workspace",
					"action": "Delete Workspace",
					"description": "This endpoint allows you to delete an existing workspace.\n\nOn successful deletion of the workspace, the response returns the `id`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/workspaces/{{$parameter[\"workspace_id\"]}}"
						}
					}
				},
				{
					"name": "Single Workspace",
					"value": "Single Workspace",
					"action": "Single workspace",
					"description": "Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/workspaces/{{$parameter[\"workspace_id\"]}}"
						}
					}
				},
				{
					"name": "Update Workspace",
					"value": "Update Workspace",
					"action": "Update Workspace",
					"description": "This endpoint allows you to update a workspace and update it's association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.\n\nOn successful updation of the workspace, the response returns the workspcae `name` and `id`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.\n\n**Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.\n\nFor eg. if your workspace has collections A and B, and in the update call, you send C's uid in the collections array, then A and B would be removed from the workspace and C would be added.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/workspaces/{{$parameter[\"workspace_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /workspaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"All Workspaces"
					]
				}
			}
		},
		{
			"displayName": "POST /workspaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "Workspace",
			"name": "workspace",
			"type": "json",
			"default": "{\n  \"collections\": [\n    {\n      \"id\": \"e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d\",\n      \"name\": \"Straw hats\",\n      \"uid\": \"8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d\"\n    }\n  ],\n  \"description\": \"Some description\",\n  \"environments\": [\n    {\n      \"id\": \"83a1aaa2-a204-4bd8-9b92-4d486918906b\",\n      \"name\": \"env\",\n      \"uid\": \"8154-83a1aaa2-a204-4bd8-9b92-4d486918906b\"\n    }\n  ],\n  \"mocks\": [\n    {\n      \"id\": \"cda672ef-1375-40e9-baee-e20ece8d7b65\"\n    }\n  ],\n  \"monitors\": [\n    {\n      \"id\": \"1e889bd2-3862-4be0-b2c2-9b1fe9673aec\"\n    }\n  ],\n  \"name\": \"New Workspace\",\n  \"type\": \"personal\"\n}",
			"routing": {
				"send": {
					"property": "workspace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"Create Workspace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /workspaces/{workspace_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"Delete Workspace"
					]
				}
			}
		},
		{
			"displayName": "GET /workspaces/{workspace_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"Single Workspace"
					]
				}
			}
		},
		{
			"displayName": "PUT /workspaces/{workspace_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
		{
			"displayName": "Workspace",
			"name": "workspace",
			"type": "json",
			"default": "{\n  \"collections\": [\n    {\n      \"id\": \"e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d\",\n      \"name\": \"Straw hats\",\n      \"uid\": \"8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d\"\n    }\n  ],\n  \"description\": \"Some description\",\n  \"environments\": [\n    {\n      \"id\": \"83a1aaa2-a204-4bd8-9b92-4d486918906b\",\n      \"name\": \"env\",\n      \"uid\": \"8154-83a1aaa2-a204-4bd8-9b92-4d486918906b\"\n    }\n  ],\n  \"mocks\": [\n    {\n      \"id\": \"cda672ef-1375-40e9-baee-e20ece8d7b65\"\n    }\n  ],\n  \"monitors\": [\n    {\n      \"id\": \"1e889bd2-3862-4be0-b2c2-9b1fe9673aec\"\n    }\n  ],\n  \"name\": \"New Workspace updated\"\n}",
			"routing": {
				"send": {
					"property": "workspace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"Update Workspace"
					]
				}
			}
		},
];
