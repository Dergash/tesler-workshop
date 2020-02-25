import {combineEpics} from 'redux-observable'
import {sessionEpics} from 'epics/session'

export const epics = combineEpics(
    sessionEpics
)
