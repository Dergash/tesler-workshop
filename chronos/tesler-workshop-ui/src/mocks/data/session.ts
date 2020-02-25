/**
 * Моки сессии и ответов логина от бэка
 * Использовать осторожно: старайтесь тестировать компоненты изолированно,
 * вне контейнера или выставляя только небольшой кусочек стейта.
 * Тест с воспроизведением полного состояния стейта нужен только в некоторых случаях.
 */
import {Session} from '@tesler-ui/core/interfaces/session'
import {ScreenMetaResponse} from '@tesler-ui/core/interfaces/screen'

export const emptyScreensSession: Session = {
    active: true,
    screens: [],
    loginSpin: false
}

export const teslerSessionSelfEsteemScreenMeta: ScreenMetaResponse = {
    bo: {
        bc: [],
    },
    views: []
}

export const teslerSession: Session = {
    ...emptyScreensSession,
    screens: [
        {
            id: 'mock',
            name: 'mock',
            url: 'screen/selfesteem',
            text: 'Самооценка',
            meta: teslerSessionSelfEsteemScreenMeta
        }
    ]
}
