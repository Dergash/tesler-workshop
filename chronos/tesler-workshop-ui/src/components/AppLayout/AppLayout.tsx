import * as React from 'react'
import {Dispatch} from 'redux'
import {Layout as AntLayout, Row, Col} from 'antd'
import {$do, connect, View} from '@tesler-ui/core'
import {AppState} from 'reducers'
import AppSideMenu from 'components/AppSideMenu/AppSideMenu'
import AppBar from 'components/AppBar/AppBar'
import ViewHeader from 'components/ViewHeader/ViewHeader'
import * as styles from './AppLayout.less'
import {SystemNotification} from '@tesler-ui/core/interfaces/objectMap'
import {WidgetMeta, WidgetTypes} from '@tesler-ui/core/interfaces/widget'
import Login from 'components/Login/Login'
import {ApplicationError} from '@tesler-ui/core/interfaces/view'
import Card from 'components/Card/Card'

interface LayoutProps {
    screenName: string,
    sessionActive: boolean,
    widgets: WidgetMeta[],
    systemNotifications: SystemNotification[],
    error: ApplicationError,
    loginError: string,
    onLogin: () => void,
    onNotificationClose: (id: number) => void,
    onErrorClose: () => void,
    onLogout: () => void,
    menuVisible: boolean
}

const skipWidgetTypes = [
    WidgetTypes.HeaderWidget,
    WidgetTypes.SecondLevelMenu,
]

export function Layout(props: LayoutProps) {
    const isInfoPanelLayout = props.widgets.some(widget => widget.type !== WidgetTypes.List)
    const headerWidth = {
        width: isInfoPanelLayout ? '1138px' : '1152px',
        maxWidth: '100%'
    }
    const bodyWidth = {
        width: isInfoPanelLayout ? '802px' : '1152px',
        maxWidth: '100%'
    }

    return !props.sessionActive
        ? <div className={styles.spinContainer}>
            <div className={styles.spinCard}>
                <Login />
            </div>
        </div>
        : <div className={styles.Container}>
        <AntLayout>
            <AntLayout.Sider className={styles.sideMenu} theme="light" width={props.menuVisible ? 256 : 48}>
                <AppSideMenu />
            </AntLayout.Sider>
            <AntLayout className={styles.affixTargetWrapper}>
                <AntLayout.Content>
                    <AntLayout.Header>
                        <div className={styles.headerWrapper}>
                            <AppBar
                                headerWidth={headerWidth}
                            />
                        </div>
                    </AntLayout.Header>
                    <AntLayout.Content>
                        <Row>
                            <ViewHeader
                                headerWidth={headerWidth}
                            />
                        </Row>
                        <Row type="flex" justify="center">
                            <Col style={headerWidth}>
                                <div style={bodyWidth}>
                                    <View
                                        skipWidgetTypes={skipWidgetTypes}
                                        card={Card as any}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </AntLayout.Content>
                </AntLayout.Content>
            </AntLayout>
        </AntLayout>
    </div>
}

function mapStateToProps(store: AppState) {
    return {
        sessionActive: store.session.active,
        screenName: store.router.screenName,
        widgets: store.view.widgets,
        menuVisible: store.screen.menuVisible,
        systemNotifications: store.view.systemNotifications,
        error: store.view.error,
        loginError: store.session.errorMsg
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLogin: () => {
            dispatch($do.login(null))
        },
        onLogout: () => {
            dispatch($do.logout(null))
        },
        onNotificationClose: (id: number) => {
            dispatch($do.closeNotification({ id }))
        },
        onErrorClose: () => {
            dispatch($do.closeViewError(null))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
