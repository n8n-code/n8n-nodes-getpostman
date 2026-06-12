import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { collectionsDescription } from './resources/collections';
import { environmentsDescription } from './resources/environments';
import { mocksDescription } from './resources/mocks';
import { monitorsDescription } from './resources/monitors';
import { workspacesDescription } from './resources/workspaces';
import { userDescription } from './resources/user';
import { importDescription } from './resources/import';
import { apiDescription } from './resources/api';
import { apiVersionDescription } from './resources/api-version';
import { schemaDescription } from './resources/schema';
import { relationsDescription } from './resources/relations';
import { webhooksDescription } from './resources/webhooks';

export class Getpostman implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Getpostman',
                name: 'N8nDevGetpostman',
                icon: { light: 'file:./getpostman.svg', dark: 'file:./getpostman.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Postman API enables programmatic access to Postman account data.',
                defaults: { name: 'Getpostman' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevGetpostmanApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Collections",
					"value": "Collections",
					"description": ""
				},
				{
					"name": "Environments",
					"value": "Environments",
					"description": ""
				},
				{
					"name": "Mocks",
					"value": "Mocks",
					"description": ""
				},
				{
					"name": "Monitors",
					"value": "Monitors",
					"description": ""
				},
				{
					"name": "Workspaces",
					"value": "Workspaces",
					"description": ""
				},
				{
					"name": "User",
					"value": "User",
					"description": ""
				},
				{
					"name": "Import",
					"value": "Import",
					"description": ""
				},
				{
					"name": "API",
					"value": "API",
					"description": ""
				},
				{
					"name": "API Version",
					"value": "API Version",
					"description": "This folder contains the requests around API versions."
				},
				{
					"name": "Schema",
					"value": "Schema",
					"description": "This folder contains all the endpoints related to Schemas."
				},
				{
					"name": "Relations",
					"value": "Relations",
					"description": "This contains requests related to relations. \n\nRelations can be of the following types: \n- `contracttest`\n- `integrationtest`\n- `documentation`\n- `testsuite`\n- `environment`\n- `mock`\n- `monitor`"
				},
				{
					"name": "Webhooks",
					"value": "Webhooks",
					"description": "With webhooks you can trigger a collection at a specific time with your own custom payload which can then be accessed in the collection.\n\nLearn more about webhooks in our [learning center](https://learning.postman.com/docs/designing-and-developing-your-api/monitoring-your-api/integrations-for-alerts/)."
				}
			],
			"default": ""
		},
		...collectionsDescription,
		...environmentsDescription,
		...mocksDescription,
		...monitorsDescription,
		...workspacesDescription,
		...userDescription,
		...importDescription,
		...apiDescription,
		...apiVersionDescription,
		...schemaDescription,
		...relationsDescription,
		...webhooksDescription
                ],
        };
}
