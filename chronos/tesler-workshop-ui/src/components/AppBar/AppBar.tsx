import React from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Popover, Row} from 'antd'
import {ViewMetaResponse} from '@tesler-ui/core/interfaces/view'
import ViewNavigation, {useViewNavigation, ViewNavigationItem} from 'components/ui/ViewNavigation/ViewNavigation'
import * as styles from './AppBar.less'
import {TeslerScreenResponse, ViewNavigationGroup} from 'interfaces/navigation'
import {$do} from '@tesler-ui/core'
import {Dispatch} from 'redux'
import {AppState} from '../../reducers'

interface AppBarOwnProps {

}

interface AppBarProps extends AppBarOwnProps {
    screenName: string,
    views: ViewMetaResponse[],
    activeView: string,
    menu: ViewNavigationGroup[],
    headerWidth: any,
    fullName: string,
    login: string,
    onLogout: () => void
}

export function AppBar(props: AppBarProps) {
    const views: ViewNavigationItem[] = props.screenName !== 'doc'
        ? useViewNavigation(props.menu, props.views)
        : props.views.map(item => ({id: item.id, title: item.title, url: item.url}))
    return <Row className={styles.headerContainer} type="flex" justify="center">
        <div className={styles.container} style={props.headerWidth}>
            <ViewNavigation views={views} activeView={props.activeView}/>
        </div>
        <div className={styles.controls}>
            <Popover
                overlayClassName={styles.userInfoPopover}
                trigger="click"
                placement="bottomRight"
                content={userMenu(props)}
            >
                <Avatar size={24} icon="user" className={styles.userIcon}/>
            </Popover>
        </div>
    </Row>
}

function userMenu(props: AppBarProps) {
    const onLogout = props.onLogout
    return <div className={styles.settings}>
        <div className={styles.fullName}>{props.fullName}</div>
        <div className={styles.login}>{props.login}</div>
        <Button onClick={onLogout} icon="logout">
            Выход
        </Button>
    </div>
}

function mapStateToProps(state: AppState) {
    const sessionScreen = state.session.screens.find(screen => screen.name === state.screen.screenName)
    const teslerScreenMeta = sessionScreen && sessionScreen.meta as TeslerScreenResponse
    return {
        screenName: state.screen.screenName,
        menu: teslerScreenMeta && teslerScreenMeta.navigation.menu,
        views: state.screen.views,
        activeView: state.view.url,
        fullName: state.session.fullName,
        login: state.session.login
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLogout: () => {
            dispatch($do.logout(null))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
