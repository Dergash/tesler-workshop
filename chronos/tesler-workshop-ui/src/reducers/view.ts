import {AnyAction} from '@tesler-ui/core/actions/actions'
import {AppState} from 'reducers'
import {ViewState} from '@tesler-ui/core/interfaces/view'
import {coreActions} from '@tesler-ui/core'

export const initialState: ViewState = {
    id: null,
    name: null,
    url: null,
    widgets: [],
    columns: null,
    readOnly: false,
    rowHeight: null,
    rowMeta: {},
    metaInProgress: {},
    popupData: { bcName: null },
    pendingDataChanges: {},
    handledForceActive: {},
    systemNotifications: []
}

export default function screenReducer(
    state: ViewState = initialState,
    action: AnyAction,
    store: Readonly<AppState>
): ViewState {
    switch (action.type) {
        case coreActions.logoutDone:
            return initialState
        default:
            return state
    }
}
