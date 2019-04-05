import {
        FETCH_ALBUMS,
        FETCH_ALBUM_ONE
} from './constants'

const INITIAL_STATE = {
        all: [],
        one: {}
}
        
export default (state = INITIAL_STATE, action) => {

        switch (action.type) {
                case FETCH_ALBUMS:
                        return { ...state, all: action.payload }
                case FETCH_ALBUM_ONE:
                        return { ...state, one: action.payload }
                default:
                        return state
        }
}
