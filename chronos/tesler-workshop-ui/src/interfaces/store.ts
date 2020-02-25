import {LoginResponse} from '@tesler-ui/core/interfaces/session'
import * as util from '@tesler-ui/core/actions/actions-utils'
import {ActionPayloadTypes} from '@tesler-ui/core/actions/actions'
import {AppState} from 'reducers'

export interface TeslerLoginResponse extends LoginResponse {
    fullName: string,
    login: string
}

class TeslerActionPayloadTypes extends ActionPayloadTypes {
    loginDone: TeslerLoginResponse
}

export declare type ActionsMap = util.uActionsMap<TeslerActionPayloadTypes>
export declare type AnyAction = util.AnyOfMap<ActionsMap> | {
    type: ' UNKNOWN ACTION ';
}

export declare type TeslerCoreReducer<ReducerState, ClientActions, State = AppState> =
    (state: ReducerState, action: AnyAction & ClientActions, store?: Readonly<State>) => ReducerState

export interface TeslerClientReducer<ReducerState, ClientActions> {
    initialState: ReducerState
    override?: boolean
    reducer: TeslerCoreReducer<ReducerState, ClientActions>
}

export declare type TeslerClientReducersMapObject<ClientStore, ClientActions> = {
    [reducerName in keyof ClientStore]: TeslerClientReducer<ClientStore[keyof ClientStore], ClientActions>;
}
