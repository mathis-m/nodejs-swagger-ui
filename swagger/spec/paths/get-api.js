export default {
    get: {
        tags: ['api'],
        responses: {
            '200': {
                description: 'OK!',
                content: {
                    'text/plain': {
                        schema: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    }
}