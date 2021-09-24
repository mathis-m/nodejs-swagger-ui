export default {
    get: {
        parameters: [{
            in: 'path',
            name: 'id',
            required: true,
            schema: {
                $ref: '#/components/schemas/id'
            }
        }],
        tags: ['some'],
        responses: {
            '200': {
                description: 'OK!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/IdResponse'
                        }
                    }
                }
            }
        }
    }
}