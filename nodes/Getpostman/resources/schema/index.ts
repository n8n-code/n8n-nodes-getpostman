import type { INodeProperties } from 'n8n-workflow';

export const schemaDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					]
				}
			},
			"options": [
				{
					"name": "Create Schema",
					"value": "Create Schema",
					"action": "Create Schema",
					"description": "This call creates a new schema.\n\nRequest body should contain a `schema` object which should atleast have these properties with `string` values:\n\n- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.\n- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.\n- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.\n\nResponse contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. \n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/schemas"
						}
					}
				},
				{
					"name": "Get Schema",
					"value": "Get Schema",
					"action": "Get Schema",
					"description": "This call fetches a single schema having the specified id.\n\nResponse contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc. \n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/schemas/{{$parameter[\"schemaId\"]}}"
						}
					}
				},
				{
					"name": "Update Schema",
					"value": "Update Schema",
					"action": "Update Schema",
					"description": "This call updates an existing schema.\n\nRequest body should contain a `schema` object which should atleast have these properties with `string` values:\n\n- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.\n- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.\n- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.\n\nResponse contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. \n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/schemas/{{$parameter[\"schemaId\"]}}"
						}
					}
				},
				{
					"name": "Create Collection From Schema",
					"value": "Create Collection From Schema",
					"action": "Create collection from schema",
					"description": "This call creates a collection and links it to an API as one or multiple relations. \n\nRequest body requires two keys:\n- `name` - Name of the collection to be created.\n- `relations` - A list of relation(s) to be created.\n\nThe allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apis/{{$parameter[\"apiId\"]}}/versions/{{$parameter[\"apiVersionId\"]}}/schemas/{{$parameter[\"schemaId\"]}}/collections"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /apis/{apiId}/versions/{apiVersionId}/schemas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					],
					"operation": [
						"Create Schema"
					]
				}
			}
		},
		{
			"displayName": "Schema",
			"name": "schema",
			"type": "json",
			"default": "{\n  \"language\": \"yaml\",\n  \"schema\": \"{\\n  \\\"openapi\\\": \\\"3.0.0\\\",\\n  \\\"info\\\": null,\\n  \\\"version\\\": \\\"v1.0\\\",\\n  \\\"title\\\": \\\"APi\\\",\\n  \\\"servers\\\": [\\n    {\\n      \\\"url\\\": \\\"http://localhost:3000\\\"\\n    }\\n  ],\\n  \\\"paths\\\": {\\n    \\\"/user\\\": {\\n      \\\"get\\\": {\\n        \\\"summary\\\": \\\"Returns details about a particular user\\\",\\n        \\\"operationId\\\": \\\"listUser\\\",\\n        \\\"tags\\\": [\\n          \\\"user\\\"\\n        ],\\n        \\\"parameters\\\": [\\n          {\\n            \\\"name\\\": \\\"id\\\",\\n            \\\"in\\\": \\\"query\\\",\\n            \\\"description\\\": \\\"ID of the user\\\",\\n            \\\"required\\\": true,\\n            \\\"schema\\\": {\\n              \\\"type\\\": \\\"integer\\\",\\n              \\\"format\\\": \\\"int32\\\"\\n            }\\n          }\\n        ],\\n        \\\"responses\\\": {\\n          \\\"200\\\": {\\n            \\\"description\\\": \\\"Details about a user by ID\\\",\\n            \\\"headers\\\": {\\n              \\\"x-next\\\": {\\n                \\\"description\\\": \\\"A link to the next page of responses\\\",\\n                \\\"schema\\\": {\\n                  \\\"type\\\": \\\"string\\\"\\n                }\\n              }\\n            },\\n            \\\"content\\\": {\\n              \\\"application/json\\\": {\\n                \\\"schema\\\": {\\n                  \\\"$ref\\\": \\\"\\\\\\\\'#/components/schemas/User\\\\\\\\'\\\"\\n                }\\n              }\\n            }\\n          },\\n          \\\"default\\\": {\\n            \\\"description\\\": \\\"Unexpected error\\\",\\n            \\\"content\\\": {\\n              \\\"application/json\\\": {\\n                \\\"schema\\\": {\\n                  \\\"$ref\\\": \\\"\\\\\\\\'#/components/schemas/Error\\\\\\\\'\\\"\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  },\\n  \\\"components\\\": {\\n    \\\"schemas\\\": {\\n      \\\"User\\\": {\\n        \\\"type\\\": \\\"object\\\",\\n        \\\"required\\\": [\\n          \\\"id\\\",\\n          \\\"name\\\"\\n        ],\\n        \\\"properties\\\": {\\n          \\\"id\\\": {\\n            \\\"type\\\": \\\"integer\\\",\\n            \\\"format\\\": \\\"int64\\\"\\n          },\\n          \\\"name\\\": {\\n            \\\"type\\\": \\\"string\\\"\\n          },\\n          \\\"tag\\\": {\\n            \\\"type\\\": \\\"string\\\"\\n          }\\n        }\\n      },\\n      \\\"Error\\\": {\\n        \\\"type\\\": \\\"object\\\",\\n        \\\"required\\\": [\\n          \\\"code\\\",\\n          \\\"message\\\"\\n        ],\\n        \\\"properties\\\": {\\n          \\\"code\\\": {\\n            \\\"type\\\": \\\"integer\\\",\\n            \\\"format\\\": \\\"int32\\\"\\n          },\\n          \\\"message\\\": {\\n            \\\"type\\\": \\\"string\\\"\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\",\n  \"type\": \"openapi3\"\n}",
			"routing": {
				"send": {
					"property": "schema",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					],
					"operation": [
						"Create Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					],
					"operation": [
						"Get Schema"
					]
				}
			}
		},
		{
			"displayName": "PUT /apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					],
					"operation": [
						"Update Schema"
					]
				}
			}
		},
		{
			"displayName": "Schema",
			"name": "schema",
			"type": "json",
			"default": "{\n  \"language\": \"json\",\n  \"schema\": \"{\\n  \\\"openapi\\\": \\\"3.0.0\\\",\\n  \\\"info\\\": null,\\n  \\\"version\\\": \\\"v1.0\\\",\\n  \\\"title\\\": \\\"APi\\\",\\n  \\\"servers\\\": [\\n    {\\n      \\\"url\\\": \\\"http://localhost:3000\\\"\\n    }\\n  ],\\n  \\\"paths\\\": {\\n    \\\"/user\\\": {\\n      \\\"get\\\": {\\n        \\\"summary\\\": \\\"Returns details about a particular user\\\",\\n        \\\"operationId\\\": \\\"listUser\\\",\\n        \\\"tags\\\": [\\n          \\\"user\\\"\\n        ],\\n        \\\"parameters\\\": [\\n          {\\n            \\\"name\\\": \\\"id\\\",\\n            \\\"in\\\": \\\"query\\\",\\n            \\\"description\\\": \\\"ID of the user\\\",\\n            \\\"required\\\": true,\\n            \\\"schema\\\": {\\n              \\\"type\\\": \\\"integer\\\",\\n              \\\"format\\\": \\\"int32\\\"\\n            }\\n          }\\n        ],\\n        \\\"responses\\\": {\\n          \\\"200\\\": {\\n            \\\"description\\\": \\\"Details about a user by ID\\\",\\n            \\\"headers\\\": {\\n              \\\"x-next\\\": {\\n                \\\"description\\\": \\\"A link to the next page of responses\\\",\\n                \\\"schema\\\": {\\n                  \\\"type\\\": \\\"string\\\"\\n                }\\n              }\\n            },\\n            \\\"content\\\": {\\n              \\\"application/json\\\": {\\n                \\\"schema\\\": {\\n                  \\\"$ref\\\": \\\"\\\\\\\\'#/components/schemas/User\\\\\\\\'\\\"\\n                }\\n              }\\n            }\\n          },\\n          \\\"default\\\": {\\n            \\\"description\\\": \\\"Unexpected error\\\",\\n            \\\"content\\\": {\\n              \\\"application/json\\\": {\\n                \\\"schema\\\": {\\n                  \\\"$ref\\\": \\\"\\\\\\\\'#/components/schemas/Error\\\\\\\\'\\\"\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  },\\n  \\\"components\\\": {\\n    \\\"schemas\\\": {\\n      \\\"User\\\": {\\n        \\\"type\\\": \\\"object\\\",\\n        \\\"required\\\": [\\n          \\\"id\\\",\\n          \\\"name\\\"\\n        ],\\n        \\\"properties\\\": {\\n          \\\"id\\\": {\\n            \\\"type\\\": \\\"integer\\\",\\n            \\\"format\\\": \\\"int64\\\"\\n          },\\n          \\\"name\\\": {\\n            \\\"type\\\": \\\"string\\\"\\n          },\\n          \\\"tag\\\": {\\n            \\\"type\\\": \\\"string\\\"\\n          }\\n        }\\n      },\\n      \\\"Error\\\": {\\n        \\\"type\\\": \\\"object\\\",\\n        \\\"required\\\": [\\n          \\\"code\\\",\\n          \\\"message\\\"\\n        ],\\n        \\\"properties\\\": {\\n          \\\"code\\\": {\\n            \\\"type\\\": \\\"integer\\\",\\n            \\\"format\\\": \\\"int32\\\"\\n          },\\n          \\\"message\\\": {\\n            \\\"type\\\": \\\"string\\\"\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\",\n  \"type\": \"openapi3\"\n}",
			"routing": {
				"send": {
					"property": "schema",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					],
					"operation": [
						"Update Schema"
					]
				}
			}
		},
		{
			"displayName": "POST /apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					],
					"operation": [
						"Create Collection From Schema"
					]
				}
			}
		},
		{
			"displayName": "Workspace",
			"name": "workspace",
			"default": "{{workspaceId}}",
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
						"Schema"
					],
					"operation": [
						"Create Collection From Schema"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My generated collection",
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
						"Schema"
					],
					"operation": [
						"Create Collection From Schema"
					]
				}
			}
		},
		{
			"displayName": "Relations",
			"name": "relations",
			"type": "json",
			"default": "[\n  {\n    \"type\": \"contracttest\"\n  }\n]",
			"routing": {
				"send": {
					"property": "relations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Schema"
					],
					"operation": [
						"Create Collection From Schema"
					]
				}
			}
		},
];
