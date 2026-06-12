import type { INodeProperties } from 'n8n-workflow';

export const apiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					]
				}
			},
			"options": [
				{
					"name": "Get All Ap Is",
					"value": "Get All Ap Is",
					"action": "Get all APIs",
					"description": "This call fetches all the APIs present in the specified workspace\n\nResponse contains an array named `apis` which would contain all the details of APIs present in the workspace.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis"
						}
					}
				},
				{
					"name": "Create API",
					"value": "Create API",
					"action": "Create API",
					"description": "This call creates a new API with a default API Version.  \n\nRequest body should contain an `api` object which should atleast have a property `name`.\n\nResponse contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc. \n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apis"
						}
					}
				},
				{
					"name": "Delete An API",
					"value": "Delete An API",
					"action": "Delete an API",
					"description": "This call deletes an existing API having the specified id.  \n\nResponse contains an `api` object with `id` of the API which was deleted.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/apis/{{$parameter[\"apiId\"]}}"
						}
					}
				},
				{
					"name": "Single API",
					"value": "Single API",
					"action": "Single API",
					"description": "This call fetches a single API having the specified id.\n\nResponse contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc. \n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/apis/{{$parameter[\"apiId\"]}}"
						}
					}
				},
				{
					"name": "Update An API",
					"value": "Update An API",
					"action": "Update an API",
					"description": "This call updates an existing API .  \n\nRequest body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.\n\nResponse contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc. \n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/apis/{{$parameter[\"apiId\"]}}"
						}
					}
				},
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
				},
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
			"displayName": "GET /apis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Workspace",
			"name": "workspace",
			"description": "Only return APIs that are inside the given workspace.",
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
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "Only return APIs that have been updated after this time. Time is represented using the ISO 8601 date and time format.",
			"default": "{{since}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Until",
			"name": "until",
			"description": "Only return APIs that have been updated before this time. Time is represented using the ISO 8601 date and time format.",
			"default": "{{until}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "until",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "createdBy",
			"description": "Only return APIs that have been created by the user ID represented by the given value.",
			"default": "{{createdBy}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updatedBy",
			"description": "Only return APIs that have been updated by the user ID represented by the given value.",
			"default": "{{updatedBy}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Is Public",
			"name": "isPublic",
			"description": "Only return APIs with the corresponding privacy state. Public APIs have the isPublic value true; private APIs have the isPublic value false.",
			"default": "{{isPublic}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "isPublic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "Only return APIs whose name includes the given value. Matching is case insensitive.",
			"default": "{{name}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Summary",
			"name": "summary",
			"description": "Only return APIs whose summary includes the given value. Matching is case insensitive.",
			"default": "{{summary}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "summary",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"description": "Only return APIs whose description includes the given value. Matching is case insensitive.",
			"default": "{{description}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "The value of sort can be one of the names of the fields included in the response.",
			"default": "{{sort}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"description": "The sorting direction, which can be ascending or descending. The value can be asc to specify an ascending direction or desc to specify a descending direction. If none is specified, the default sorting direction is descending for timestamp and numeric fields and ascending otherwise. An ID is not considered a numeric field.",
			"default": "{{direction}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Get All Ap Is"
					]
				}
			}
		},
		{
			"displayName": "POST /apis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API"
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
						"API"
					],
					"operation": [
						"Create API"
					]
				}
			}
		},
		{
			"displayName": "API",
			"name": "api",
			"type": "json",
			"default": "{\n  \"description\": \"This is description.\",\n  \"name\": \"Sync Service API\",\n  \"summary\": \"This is supposed to be a short summary.\"\n}",
			"routing": {
				"send": {
					"property": "api",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API"
					]
				}
			}
		},
		{
			"displayName": "DELETE /apis/{apiId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Delete An API"
					]
				}
			}
		},
		{
			"displayName": "GET /apis/{apiId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Single API"
					]
				}
			}
		},
		{
			"displayName": "PUT /apis/{apiId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Update An API"
					]
				}
			}
		},
		{
			"displayName": "API",
			"name": "api",
			"type": "json",
			"default": "{\n  \"description\": \"This is an updated Description\",\n  \"name\": \"New name\"\n}",
			"routing": {
				"send": {
					"property": "api",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Update An API"
					]
				}
			}
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
					],
					"operation": [
						"Update An API Version"
					]
				}
			}
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
					],
					"operation": [
						"Create Relations"
					]
				}
			}
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
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
						"API"
					],
					"operation": [
						"Create Collection From Schema"
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
						"API"
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
						"API"
					],
					"operation": [
						"Sync Relations With Schema"
					]
				}
			}
		},
];
