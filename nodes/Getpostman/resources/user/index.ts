import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "API Key Owner",
					"value": "API Key Owner",
					"action": "API Key Owner",
					"description": "the `/me` Postman API endpoint lets you access information about the authenticated user. You can retrieve the authenticated user's username, full name, e-mail address, and any other available information.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"API Key Owner"
					]
				}
			}
		},
];
