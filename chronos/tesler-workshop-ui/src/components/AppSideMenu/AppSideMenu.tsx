import React from 'react'
import {connect} from '@tesler-ui/core'
import {SessionScreen} from '@tesler-ui/core/interfaces/session'
import ScreenNavigation from 'components/ui/ScreenNavigation/ScreenNavigation'
import * as styles from './AppSideMenu.less'
import {AppState} from 'reducers/index'
import {setMenuVisible} from 'actions/actions'
import {Dispatch} from 'redux'

export interface AppSideMenuProps {
    screenName: string,
    screenUrl: string,
    sessionScreens: SessionScreen[],
    menuVisible: boolean,
    onMenuVisible: (menuVisible: boolean) => void
}

export function AppSideMenu(props: AppSideMenuProps) {
    return (
        <React.Fragment>
            <div className={styles.logoContainer}
                onClick={() => {props.onMenuVisible(!props.menuVisible)}}>
                <div className={styles.textlogo}>
                    {props.menuVisible ? 'Tesler' : 'T'}
                </div>
            </div>
            <div className={styles.navigation}>
                <ScreenNavigation
                    items={props.sessionScreens}
                    selectedScreen={props.screenUrl}
                />
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(store: AppState) {
    const selectedScreen = store.session.screens.find(item => item.name === store.router.screenName)
    const screenUrl = selectedScreen && selectedScreen.url
        || `/screen/${store.router.screenName}`
    return {
        screenName: store.router.screenName,
        screenUrl,
        sessionScreens: store.session.screens,
        menuVisible: store.screen.menuVisible
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onMenuVisible: (menuVisible: boolean) => {
            dispatch(setMenuVisible(menuVisible))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSideMenu)
