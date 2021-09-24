export default {
    components: {
        schemas: {
            id: {
                type: 'number',
                description: "Some ID",
                example: "132456"
            },
            IdResponse: {
                type: 'object',
                properties: {
                    id: {
                        $ref: '#/components/schemas/id'
                    }
                }
            }
        }
    }
}