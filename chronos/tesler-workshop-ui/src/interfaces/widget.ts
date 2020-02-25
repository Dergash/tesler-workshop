import {WidgetMeta} from '@tesler-ui/core/interfaces/widget'
import {ObjectMap} from '@tesler-ui/core/interfaces/objectMap'
import React from 'react'
import {MultivalueSingleValue} from '@tesler-ui/core/interfaces/data'

export const emptyMultivalueField: MultivalueSingleValue[] = []

export const enum TeslerFieldKey {
    newVersion = 'newVersion'
}

/**
 * Получение массива групп виджетов. Группировка происходит по полю position, группы расположены по возрастанию позиции.
 * Результат мемоизируется.
 *
 * @param widgets Плоский список виджетов.
 * @param skipWidgetTypes Типы виджетов, которые должны быть исключены из результата.
 */
export function usePositionedWidgets(widgets: WidgetMeta[], skipWidgetTypes: string[]) {
    return React.useMemo(
        () => {
            const byRow: ObjectMap<WidgetMeta[]> = {}

            if (!widgets) {
                return byRow
            }

            widgets.forEach(item => {
                if (skipWidgetTypes && skipWidgetTypes.includes(item.type)) {
                    return
                }

                if (!byRow[item.position]) {
                    byRow[item.position] = []
                }
                byRow[item.position].push(item)
            })

            return byRow
        },
        [widgets, skipWidgetTypes]
    )
}
