import React from 'react'
import {Menu, Icon} from 'antd'
import {SelectParam} from 'antd/es/menu'
import {changeLocation, connect} from '@tesler-ui/core'
import {SessionScreen} from '@tesler-ui/core/interfaces/session'
import * as styles from './ScreenNavigation.less'
import {AppState} from 'reducers/index'

export interface ScreenNavigationProps {
    items: SessionScreen[],
    selectedScreen: string,
    menuVisible: boolean
}

export function ScreenNavigation(props: ScreenNavigationProps) {
    const screens: SessionScreen[] = props.items || []

    const handleScreen = (e: SelectParam) => {
        changeLocation(e.key)
    }

    return <Menu
        className={styles.Container}
        selectedKeys={[props.selectedScreen]}
        onClick={handleScreen}
    >
    <Menu.Divider className={props.menuVisible ? styles.MenuDivider : styles.MenuDividerCollapsed}/>
        {screens.map((item) => {
            return (
                <Menu.Item key={item.url} className={props.menuVisible ? styles.Item : styles.ItemCollapsed}>
                    <span className={styles.MenuItemLink}>
                        <Icon className={styles.icon} type={item.icon ? item.icon : 'coffee'} />
                        <span>{props.menuVisible && item.text}</span>
                        {props.menuVisible && item.notification &&
                            <div className={styles.Notification}>{item.notification}</div>
                        }
                    </span>
                </Menu.Item>
            )
        })}
    </Menu>
}

function mapStateToProps(store: AppState) {
    return {
        menuVisible: store.screen.menuVisible
    }
}

export default connect(mapStateToProps)(ScreenNavigation)
