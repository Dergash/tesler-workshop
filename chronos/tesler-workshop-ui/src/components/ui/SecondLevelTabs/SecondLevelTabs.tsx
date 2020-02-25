import React from 'react'
import {Tabs} from 'antd'
import {
    historyObj,
    Link,
    isViewNavigationGroup,
    isViewNavigationCategory,
    isViewNavigationItem
} from '@tesler-ui/core'
import {ViewMetaResponse} from '@tesler-ui/core/interfaces/view'
import styles from './SecondLevelTabs.less'
import {
    ViewNavigationCategory,
    ViewNavigationItem,
    MenuItem
} from '@tesler-ui/core/interfaces/navigation'

export interface ViewNavigationProps {
    views: ViewMetaResponse[],
    activeView: string,
    navigationMenu: MenuItem[],
    bcPath: string,
    navigationLevel?: number
}

interface ViewParseInfo {
    name: string,
    customTitle?: string,
    selected?: boolean,
}

export function SecondLevelTabs(props: ViewNavigationProps) {
    const handleChange = (key: string) => {
        historyObj.push(key)
    }

    let parsedViews: ViewParseInfo[] = []
    const activeView = props.views.find((v) => v.url === props.activeView)
    const activeViewName = activeView && activeView.name

    if (activeViewName) {
        let getTabsResult: any = null
        props.navigationMenu.some((navItem) => {
            return !!(getTabsResult = getTabsFromNavGroup(activeViewName, navItem, props.navigationLevel || 2, 1))
        })

        if (getTabsResult && 'tabList' in getTabsResult) {
            parsedViews = getTabsResult.tabList
        }
    }

    let selectedTabViewName = props.activeView
    const levelViews: Array<{name: string, url: string}> = []
    parsedViews.forEach((parsedView) => {
        const view = props.views.find((v) => v.name === parsedView.name)
        if (view) {
            levelViews.push({
                name: (parsedView.customTitle) ? parsedView.customTitle : view.title,
                url: view.url
            })

            if (parsedView.selected) {
                selectedTabViewName = view.url
            }
        }
    })

    return <nav className={styles.container}>
        <Tabs
            activeKey={`${selectedTabViewName}/${props.bcPath}`}
            tabBarGutter={24}
            size="large"
            onChange={handleChange}
        >
            {levelViews.map((item) =>
                <Tabs.TabPane
                    key={`${item.url}/${props.bcPath}`}
                    tab={<Link href={`${item.url}/${props.bcPath}`} className={styles.link}>
                        <span>{item.name}</span>
                    </Link>}
                />
            )}
        </Tabs>
    </nav>
}

const getItemInfo = (menuItem: ViewNavigationCategory | ViewNavigationItem): ViewParseInfo => {
    if (isViewNavigationCategory(menuItem)) {
        return {
            name: getItemInfo(menuItem.child[0]).name,
            customTitle: menuItem.categoryName
        }
    } else if (isViewNavigationItem(menuItem)) {
        return {
            name: menuItem.viewName
        }
    }
}

const getCategoryTabs = (
    categoryData: ViewNavigationCategory,
    selectedItem: ViewNavigationCategory | ViewNavigationItem
) => {
    const tabs: ViewParseInfo[] = []

    categoryData.child.forEach((child) => {
        const tab = getItemInfo(child)
        if (child === selectedItem) {
            tab.selected = true
        }
        tabs.push(tab)
    })

    return tabs
}

/**
 * Рекурсивно проходим вглубь элементов навигации в поисках выбранной вью. Как только вью найдена, элемент возвращается
 * наверх до категории целевого уровня вложенности, давая ему понять, что выбран один из его потомков. Генерируем данные
 * по табам для этой категории и возвращаем наверх уже результат с табами.
 *
 * @param viewName Имя целевой вью.
 * @param menuItem Элемент навигации. Первоначально ожидается группа.
 * @param targetLevel Целевой уровень вложенности.
 * @param currentLevel Текущий уровень вложенности, на котором находится функция.
 */
const getTabsFromNavGroup = (
    viewName: string, menuItem: MenuItem, targetLevel: number, currentLevel: number
): {tabList: ViewParseInfo[]} | MenuItem => {
    if (isViewNavigationGroup(menuItem)) {
        let tabList: {tabList: ViewParseInfo[]}

        menuItem.child.find((child) => {
            const searchResult = getTabsFromNavGroup(viewName, child, targetLevel, currentLevel + 1)
            if (searchResult && 'tabList' in searchResult) {
                tabList = searchResult
                return true
            }
        })

        return tabList
    } else if (isViewNavigationCategory(menuItem)) {
        let tabList: {tabList: ViewParseInfo[]}

        const selectedChild = menuItem.child.find((child) => {
            const searchResult = getTabsFromNavGroup(viewName, child, targetLevel, currentLevel + 1)

            if (searchResult && 'tabList' in searchResult) {
                tabList = searchResult
                return false
            }

            return !!searchResult
        })

        if (selectedChild && currentLevel === targetLevel) {
            return {tabList: getCategoryTabs(menuItem, selectedChild)}
        }

        return tabList || selectedChild
    } else if (isViewNavigationItem(menuItem) && menuItem.viewName === viewName) {
        return menuItem
    }

    return null
}

export default React.memo(SecondLevelTabs)
