/**
 * Интерфейсы навигации по УОРу
 *
 * В основном сужают ядровое дерево навигации до плоского списка, т.к. на УОРе в меню вьюх не предполагается
 * схлопывающихся групп и глубоких уровней вложенности.
 */

import {ScreenMetaResponse} from '@tesler-ui/core/interfaces/screen'

/**
 * Расширение ядрового ответа о мете скрина УОРовской навигацией
 */
export interface TeslerScreenResponse extends ScreenMetaResponse {
    navigation: {
        menu: ViewNavigationGroup[]
    }
}

/**
 * Описание пунктов меню в мете скрина.
 * Используется как источник для формирования верхнего меню скринов, используя имя группы как имя вьюхи,
 * а в качестве адреса перехода - адрес первой вьюхи из поля child
 *
 * @param id Идентификатор группы
 * @param title Имя группы
 * @param child Список вью, входящих в группу
 */
export interface ViewNavigationGroup {
    id: number,
    title: string,
    child: ViewNavigationItem[]
}

/**
 * Описание вьюхи в навигации в мете скрина.
 *
 * @param viewName Имя вьюхи, которую потом можно найти в списке вьюх скрина.
 */
export interface ViewNavigationItem {
    viewName: string
}

export interface Breadcrumb {
    viewName: string,
    bcName: string,
    type: 'list' | 'card',
}
