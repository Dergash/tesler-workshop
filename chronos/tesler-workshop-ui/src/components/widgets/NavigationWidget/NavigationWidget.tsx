import React, {FunctionComponent} from 'react'
import {connect} from '@tesler-ui/core'
import {AppState} from 'reducers'
import {ViewMetaResponse} from '@tesler-ui/core/interfaces/view'
import {MenuItem} from '@tesler-ui/core/interfaces/navigation'
import {SecondLevelTabs} from 'components/ui/SecondLevelTabs/SecondLevelTabs'
import {TeslerScreenResponse} from 'interfaces/navigation'
import {WidgetMeta} from '@tesler-ui/core/interfaces/widget'

export interface NavigationWidgetOwnProps {
    meta: WidgetMeta
}

export interface NavigationWidgetProps extends NavigationWidgetOwnProps {
    views: ViewMetaResponse[],
    activeView: string,
    navigationMenu: MenuItem[],
    bcPath: string
}

export const NavigationWidget: FunctionComponent<NavigationWidgetProps> = (props) => {
    return <SecondLevelTabs
        activeView={props.activeView}
        views={props.views}
        navigationMenu={props.navigationMenu}
        bcPath={props.bcPath}
        navigationLevel={null}
    />
}

function mapStateToProps(store: AppState) {
    const sessionScreen = store.session.screens.find(screen => screen.name === store.screen.screenName)
    const teslerScreenMeta = sessionScreen && sessionScreen.meta as TeslerScreenResponse
    return {
        bcPath: store.router.bcPath,
        views: store.screen.views,
        activeView: store.view.url,
        navigationMenu: teslerScreenMeta && teslerScreenMeta.navigation.menu
    }
}

export default connect(mapStateToProps)(NavigationWidget)
