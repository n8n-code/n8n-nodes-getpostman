import type { INodeProperties } from 'n8n-workflow';

export const collectionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					]
				}
			},
			"options": [
				{
					"name": "All Collections",
					"value": "All Collections",
					"action": "All Collections",
					"description": "The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.\n\nThe response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collections"
						}
					}
				},
				{
					"name": "Create Collection",
					"value": "Create Collection",
					"action": "Create Collection",
					"description": "This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).\n\nOn successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.\n\nYou can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/collections"
						}
					}
				},
				{
					"name": "Create A Fork",
					"value": "Create A Fork",
					"action": "Create a Fork",
					"description": "This endpoint allows you to create a fork from an existing collection.\n\nOn successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.\n\nYou can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/collections/fork/{{$parameter[\"collection_uid\"]}}"
						}
					}
				},
				{
					"name": "Merge A Fork",
					"value": "Merge A Fork",
					"action": "Merge a Fork",
					"description": "This endpoint allows you to merge a forked collection back to its destination collection.\n\nOn successful creation of the collection, the response returns the collection `name`, `id` and `uid`.\n\nYou need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.\n\nOptionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies\n\n| Merge Strategy | Behaviour |\n| --- | --- |\n| deleteSource | Forked collection is deleted after merging |\n| updateSourceWithDestination | Forked collection is up to date with changes in destination collection |\n\nIf the collections cannot be merged (due to conflicts), appropriate error messages will be returned.\n\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/collections/merge"
						}
					}
				},
				{
					"name": "Delete Collection",
					"value": "Delete Collection",
					"action": "Delete Collection",
					"description": "This endpoint allows you to delete an existing collection.\n\nOn successful deletion of the collection, the response returns the `id` and `uid`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/collections/{{$parameter[\"collection_uid\"]}}"
						}
					}
				},
				{
					"name": "Single Collection",
					"value": "Single Collection",
					"action": "Single Collection ",
					"description": "Access the contents of a collection that is accessible to you using its unique id (`uid`).\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/collections/{{$parameter[\"collection_uid\"]}}"
						}
					}
				},
				{
					"name": "Update Collection",
					"value": "Update Collection",
					"action": "Update Collection",
					"description": "This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).\n\nOn successful updation of the collection, the response returns the collection `name`, `id` and `uid`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.\n\nNote: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/collections/{{$parameter[\"collection_uid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"All Collections"
					]
				}
			}
		},
		{
			"displayName": "POST /collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Create Collection"
					]
				}
			}
		},
		{
			"displayName": "Collection",
			"name": "collection",
			"type": "json",
			"default": "{\n  \"info\": {\n    \"description\": \"This is just a sample collection.\",\n    \"name\": \"Sample Collection {{$randomInt}}\",\n    \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"\n  },\n  \"item\": [\n    {\n      \"item\": [\n        {\n          \"name\": \"Sample POST Request\",\n          \"request\": {\n            \"body\": {\n              \"mode\": \"raw\",\n              \"raw\": \"{\\\"data\\\": \\\"123\\\"}\"\n            },\n            \"description\": \"This is a sample POST Request\",\n            \"header\": [\n              {\n                \"key\": \"Content-Type\",\n                \"value\": \"application/json\"\n              }\n            ],\n            \"method\": \"POST\",\n            \"url\": \"https://postman-echo.com/post\"\n          }\n        }\n      ],\n      \"name\": \"This is a folder\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "collection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Create Collection"
					]
				}
			}
		},
		{
			"displayName": "POST /collections/fork/{collection_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Create A Fork"
					]
				}
			}
		},
		{
			"displayName": "Workspace",
			"name": "workspace",
			"description": "Workspace ID is required to create a fork",
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
						"Collections"
					],
					"operation": [
						"Create A Fork"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Fork name",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Create A Fork"
					]
				}
			}
		},
		{
			"displayName": "POST /collections/merge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Merge A Fork"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "destination",
			"type": "string",
			"default": "{{destination_collection_uid}}",
			"routing": {
				"send": {
					"property": "destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Merge A Fork"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "{{source_collection_uid}}",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Merge A Fork"
					]
				}
			}
		},
		{
			"displayName": "Strategy",
			"name": "strategy",
			"type": "string",
			"default": "deleteSource",
			"routing": {
				"send": {
					"property": "strategy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Merge A Fork"
					]
				}
			}
		},
		{
			"displayName": "DELETE /collections/{collection_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Delete Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /collections/{collection_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Single Collection"
					]
				}
			}
		},
		{
			"displayName": "PUT /collections/{collection_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Collection",
			"name": "collection",
			"type": "json",
			"default": "{\n  \"info\": {\n    \"_postman_id\": \"174bad7c-07e3-45f3-914f-36cf84e5586f\",\n    \"description\": \"This is just a sample collection.\",\n    \"name\": \"Sample Collection {{$randomInt}}\",\n    \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"\n  },\n  \"item\": [\n    {\n      \"item\": [\n        {\n          \"name\": \"Sample POST Request\",\n          \"request\": {\n            \"body\": {\n              \"mode\": \"raw\",\n              \"raw\": \"{\\\"data\\\": \\\"123\\\"}\"\n            },\n            \"description\": \"This is a sample POST Request\",\n            \"header\": [\n              {\n                \"key\": \"Content-Type\",\n                \"value\": \"application/json\"\n              }\n            ],\n            \"method\": \"POST\",\n            \"url\": \"https://postman-echo.com/post\"\n          }\n        }\n      ],\n      \"name\": \"This is a folder\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "collection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
];
