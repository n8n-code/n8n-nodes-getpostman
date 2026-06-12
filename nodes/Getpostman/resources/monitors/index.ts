import type { INodeProperties } from 'n8n-workflow';

export const monitorsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					]
				}
			},
			"options": [
				{
					"name": "All Monitors",
					"value": "All Monitors",
					"action": "All Monitors",
					"description": "The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.\n\nThe response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/monitors"
						}
					}
				},
				{
					"name": "Create Monitor",
					"value": "Create Monitor",
					"action": "Create Monitor",
					"description": "This endpoint allows you to create a monitor.\n\nSome sample `cron` values are:\n\n| Frequency                  | Cron Pattern   |\n|-----------------------|----------------|\n| Every 5 minutes       | `*/5 * * * *`  |\n| Every 30 minutes     | `*/30 * * * *` |\n| Every Hour         | `0 */1 * * *`  |\n| Every 6 Hours      | `0 */6 * * *`  |\n| Every day at 5pm    | `0 17 * * *`   |\n| Every Monday at 12pm  | `0 12 * * MON` |\n| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |\n\nNote: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. \n\nFor more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\n\nYou can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.\n\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/monitors"
						}
					}
				},
				{
					"name": "Delete Monitor",
					"value": "Delete Monitor",
					"action": "Delete Monitor",
					"description": "This endpoint can be used to delete an existing monitor using its `uid`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/monitors/{{$parameter[\"monitor_uid\"]}}"
						}
					}
				},
				{
					"name": "Single Monitor",
					"value": "Single Monitor",
					"action": "Single Monitor",
					"description": "This endpoint fetches you basic information about the monitor using its `uid`.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/monitors/{{$parameter[\"monitor_uid\"]}}"
						}
					}
				},
				{
					"name": "Update Monitor",
					"value": "Update Monitor",
					"action": "Update Monitor",
					"description": "This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.\n\nSome example `cron` values are:\n\n| Frequency                  | Cron Pattern   |\n|-----------------------|----------------|\n| Every 5 minutes       | `*/5 * * * *`  |\n| Every 30 minutes     | `*/30 * * * *` |\n| Every Hour         | `0 */1 * * *`  |\n| Every 6 Hours      | `0 */6 * * *`  |\n| Every day at 5pm    | `0 17 * * *`   |\n| Every Monday at 12pm  | `0 12 * * MON` |\n| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |\n\nNote: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. \n\nFor more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/monitors/{{$parameter[\"monitor_uid\"]}}"
						}
					}
				},
				{
					"name": "Run A Monitor",
					"value": "Run A Monitor",
					"action": "Run a Monitor",
					"description": "This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.\n\n> Requires <a href=\"#authentication\">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/monitors/{{$parameter[\"monitor_uid\"]}}/run"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /monitors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"All Monitors"
					]
				}
			}
		},
		{
			"displayName": "POST /monitors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"Create Monitor"
					]
				}
			}
		},
		{
			"displayName": "Monitor",
			"name": "monitor",
			"type": "json",
			"default": "{\n  \"collection\": \"5852-8d05dd85-222c-1452-553b-e76a531b71ed\",\n  \"environment\": \"5852-8a4c21ea-2a36-40d1-a82d-d717fac9d6ef\",\n  \"name\": \"This is a Monitor Name\",\n  \"schedule\": {\n    \"cron\": \"0 0 * * *\",\n    \"timezone\": \"Asia/Kolkata\"\n  }\n}",
			"routing": {
				"send": {
					"property": "monitor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"Create Monitor"
					]
				}
			}
		},
		{
			"displayName": "DELETE /monitors/{monitor_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"Delete Monitor"
					]
				}
			}
		},
		{
			"displayName": "GET /monitors/{monitor_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"Single Monitor"
					]
				}
			}
		},
		{
			"displayName": "PUT /monitors/{monitor_uid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"Update Monitor"
					]
				}
			}
		},
		{
			"displayName": "Monitor",
			"name": "monitor",
			"type": "json",
			"default": "{\n  \"name\": \"Updated Monitor Name\",\n  \"schedule\": {\n    \"cron\": \"*/5 * * * *\",\n    \"timezone\": \"America/Chicago\"\n  }\n}",
			"routing": {
				"send": {
					"property": "monitor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"Update Monitor"
					]
				}
			}
		},
		{
			"displayName": "POST /monitors/{monitor_uid}/run",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitors"
					],
					"operation": [
						"Run A Monitor"
					]
				}
			}
		},
];
