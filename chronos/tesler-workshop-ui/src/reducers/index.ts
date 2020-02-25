/**
 * Перечисляются редьюсеры, которые составляют часть store самого приложения
 */

import testReducer, {ITestState, initialState as testReducerInitial} from 'reducers/testReducer'
import screenReducer, {initialState as screenInitialState} from 'reducers/screen'
import dataReducer, {initialState as dataInitialState} from 'reducers/data'
import viewReducer, {initialState as viewInitialState} from 'reducers/view'
import sessionReducer, {initialState as sessionInitialState, TeslerSessionState} from 'reducers/session'
import {Store} from '@tesler-ui/core/interfaces/store'
import {TeslerScreenState} from 'interfaces/screen'
import {TeslerClientReducersMapObject} from 'interfaces/store'

export const reducers: TeslerClientReducersMapObject<AppReducers, any> = {
    testReducer: {
        initialState: testReducerInitial,
        reducer: testReducer
    },
    screen: {
        initialState: screenInitialState,
        reducer: screenReducer
    },
    data: {
        initialState: dataInitialState,
        reducer: dataReducer
    },
    view: {
        initialState: viewInitialState,
        reducer: viewReducer
    },
    session: {
        initialState: sessionInitialState,
        reducer: sessionReducer
    }
}

export interface AppReducers extends Partial<Store> {
    testReducer: ITestState,
    screen: TeslerScreenState,
    session: TeslerSessionState
}

export type AppState = Store & AppReducers
