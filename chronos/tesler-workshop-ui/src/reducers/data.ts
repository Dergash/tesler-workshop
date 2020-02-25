import {AnyAction} from '@tesler-ui/core/actions/actions'
import {AppState} from 'reducers'
import {DataState} from '@tesler-ui/core/interfaces/data'
import {coreActions} from '@tesler-ui/core'

export const initialState: DataState = {
}

export default function screenReducer(
    state: DataState = initialState,
    action: AnyAction,
    store: Readonly<AppState>
): DataState {
    switch (action.type) {
        case coreActions.logoutDone:
            return initialState
        default:
            return state
    }
}
