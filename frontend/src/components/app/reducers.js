import {
        HANDLE_HISTORY
} from './constants'

const INITIAL_STATE = {
        history: {},
        endpoints: {
                albums: {
                        host: 'https://jsonplaceholder.typicode.com/albums',
                        token: null
                },
                api: {
                        host: 'http://localhost:8000',
                        token: null
                }
        }
}
        
export default (state = INITIAL_STATE, action) => {

        switch (action.type) {
                case HANDLE_HISTORY:
                        return { ...state, history: action.payload }
                default:
                        return state
        }
}
