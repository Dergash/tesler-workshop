/**
 * Пример редьюсера в приложении
 * Может реагировать на экшны ядра и на экшны самого приложения.
 */

import {INCREMENT_BUTTON, DECREMENT_BUTTON} from 'actions/actions'
import {coreActions} from '@tesler-ui/core'

export interface ITestState {
    clicks: number
}

export const initialState = {
    clicks: 0
}

export default function testReducer(state: ITestState = { clicks: 0 }, action: any ): ITestState {
    switch (action.type) {
        case coreActions.changeLocation:
            return { ...state, clicks: state.clicks + 1 }
        case INCREMENT_BUTTON:
            return { ...state, clicks: state.clicks + 1 }
        case DECREMENT_BUTTON:
            return { ...state, clicks: state.clicks - 1 }
        default:
            return state
    }
}
