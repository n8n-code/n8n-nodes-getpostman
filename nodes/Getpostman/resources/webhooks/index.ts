import type { INodeProperties } from 'n8n-workflow';

export const webhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "Create Webhook",
					"value": "Create Webhook",
					"action": "Create Webhook",
					"description": "Create a webhook that triggers a collection with your custom payload.\n\nYou can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:\n\n* `name`: the name of the webhook that you're creating.\n* `collection`: the ID of the collection that you want to trigger once this webhook is called.\n\nOnce created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhooks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "Workspace",
			"name": "workspace",
			"default": "{{workspace_id}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "workspace",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
		{
			"displayName": "Webhook",
			"name": "webhook",
			"type": "json",
			"default": "{\n  \"collection\": \"{{collection_id}}\",\n  \"name\": \"{{webhook_name}}\"\n}",
			"routing": {
				"send": {
					"property": "webhook",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Create Webhook"
					]
				}
			}
		},
];
