import getApi from "./get-api"
import getSomeById from "./get-some-by-id"
export default {
    paths: {
        '/api': {
            ...getApi
        },
        '/api/some/{id}': {
            ...getSomeById,
        }
    }
}