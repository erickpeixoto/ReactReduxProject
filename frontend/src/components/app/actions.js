
import {
    HANDLE_HISTORY
} from './constants'


export function handleHistory(history) {
    return {
        type: HANDLE_HISTORY,
        payload: history
    }
}



