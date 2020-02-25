import {combineEpics} from 'redux-observable'
import {$do, coreActions, historyObj} from '@tesler-ui/core'
import {Epic} from '@tesler-ui/core/actions/actions'
import {Observable} from 'rxjs/Observable'
import {getBasicAuthRequest, logout} from 'api/session'
import {AxiosError} from 'axios'
import {TeslerLoginResponse} from 'interfaces/store'

const responseStatusMessages: Record<number, string> = {
    401: 'Неверные учетные данные',
    403: 'В доступе отказано'
}

const loginEpic: Epic = (action$, store) => action$.ofType(coreActions.login)
    .switchMap((action) => {
        const login = action.payload && action.payload.login
        const password = action.payload && action.payload.password
        return getBasicAuthRequest(login, password)
            .mergeMap((data: TeslerLoginResponse) => {
                return Observable.of($do.loginDone({
                    screens: data.screens,
                    fullName: data.fullName,
                    login: data.login
                } as TeslerLoginResponse))
            })
            .catch((error: AxiosError) => {
                const errorMsg = (error.response)
                    ? responseStatusMessages[error.response.status] || 'Серверное приложение недоступно'
                    : 'Пустой ответ сервера'
                return Observable.of($do.loginFail({errorMsg}))
            })
    })

const logoutEpic: Epic = (action$, store) =>
    action$.ofType(coreActions.logout)
        .switchMap((action) => logout().map(() => {
            const history = historyObj
            history.action = 'PUSH'
            history.push('')
            return $do.logoutDone(null)
        }))

const logoutDoneEpic: Epic = (action$, store) =>
    action$.ofType(coreActions.logoutDone)
        .mergeMap((action) => {
            sessionStorage.removeItem('auth')
            return Observable.empty()
        })

export const sessionEpics = combineEpics(
    loginEpic, logoutEpic, logoutDoneEpic
)
