import {coreActions} from '@tesler-ui/core'
import {AppState} from 'reducers'
import {Session} from '@tesler-ui/core/interfaces/session'
import {AnyAction} from 'interfaces/store'

export interface TeslerSessionState extends Session {
    fullName: string,
    login: string
}

export const initialState: TeslerSessionState = {
    active: false,
    loginSpin: false,
    screens: [],
    fullName: '',
    login: ''
}

export default function sessionReducer(
    state: TeslerSessionState = initialState,
    action: AnyAction,
    store: Readonly<AppState>
): TeslerSessionState {
    switch (action.type) {
        case coreActions.loginDone: {
            return {
                ...state,
                fullName: action.payload.fullName,
                login: action.payload.login
            }
        }
        case coreActions.logout: {
            return {...state, loginSpin: false, active: false}
        }
        case coreActions.logoutDone: {
            return {...state, loginSpin: false, active: false, screens: []}
        }
        default:
            return state
    }
}
