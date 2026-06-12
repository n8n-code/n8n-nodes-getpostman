import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class GetpostmanApi implements ICredentialType {
        name = 'N8nDevGetpostmanApi';

        displayName = 'Getpostman API';

        icon: Icon = { light: 'file:../nodes/Getpostman/getpostman.svg', dark: 'file:../nodes/Getpostman/getpostman.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.getpostman.com',
                        required: true,
                        placeholder: 'https://api.getpostman.com',
                        description: 'The base URL of your Getpostman API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
