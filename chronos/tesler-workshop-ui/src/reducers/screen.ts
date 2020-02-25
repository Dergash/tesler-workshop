import {coreActions} from '@tesler-ui/core'
import {AnyAction} from '@tesler-ui/core/actions/actions'
import {BcMetaState} from '@tesler-ui/core/interfaces/bc'
import {ObjectMap} from '@tesler-ui/core/interfaces/objectMap'
import {TeslerScreenState} from 'interfaces/screen'
import {AppState} from 'reducers'
import {MENU_VISIBLE} from 'actions/actions'

export const initialState: TeslerScreenState = {
    screenName: '',
    bo: {
        activeBcName: null,
        bc: {} as ObjectMap<BcMetaState>
    },
    cachedBc: {},
    views: [],
    primaryView: '',
    filters: {},
    sorters: {},
    menuVisible: true
}

export default function screenReducer(
    state: TeslerScreenState = initialState,
    action: AnyAction | any,
    store: Readonly<AppState>
): TeslerScreenState {
    switch (action.type) {
        case coreActions.logoutDone:
            return initialState
        case MENU_VISIBLE: {
            return {
                ...state,
                menuVisible: action.payload
            }
        }
        default:
            return state
    }
}
