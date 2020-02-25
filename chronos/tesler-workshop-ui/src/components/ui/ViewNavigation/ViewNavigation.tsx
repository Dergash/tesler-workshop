import React from 'react'
import {Tabs} from 'antd'
import {historyObj, isViewNavigationGroup} from '@tesler-ui/core'
import {ViewMetaResponse} from '@tesler-ui/core/interfaces/view'
import {ViewNavigationItem as CoreViewNavigationItem} from '@tesler-ui/core/interfaces/navigation'
import {ViewNavigationGroup, ViewNavigationCategory} from '@tesler-ui/core/interfaces/navigation'
import styles from './ViewNavigation.less'

export interface ViewNavigationProps {
    views: ViewNavigationItem[],
    activeView: string
}

export interface ViewNavigationItem {
    id: number,
    title: string,
    url: string
}

export function ViewNavigation(props: ViewNavigationProps) {

    const handleChange = (key: string) => {
        historyObj.push(key)
    }

    return <nav className={styles.container}>
        <Tabs
            activeKey={props.activeView}
            tabBarGutter={24}
            size="large"
            onChange={handleChange}
        >
            {props.views.map((item) =>
                <Tabs.TabPane
                    key={item.url}
                    tab={<span className={styles.item}>
                            {item.title}
                        </span>
                    }
                />
            )}
        </Tabs>
    </nav>
}

export function useViewNavigation(
    menu: Array<ViewNavigationGroup | ViewNavigationCategory>,
    views: ViewMetaResponse[]
): ViewNavigationItem[] {
    return React.useMemo(() => {
        if (!menu || !views) {
            return []
        }

        return menu.map(item => {
            let title = ''
            let viewName = ''
            if (isViewNavigationGroup(item)) {
                title = item.title
                viewName = item.child && item.child[0] && (item.child[0] as CoreViewNavigationItem).viewName
            } else {
                viewName = (item as CoreViewNavigationItem).viewName
            }
            const matchingView = views.find(view => view.name === viewName)
            return matchingView && {
                id: matchingView.id,
                title: title || matchingView.title,
                url: matchingView.url
            }
        }).filter(item => !!item)
    }, [menu, views])
}

export default React.memo(ViewNavigation)
