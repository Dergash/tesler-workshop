import React from 'react'
import {Modal} from 'antd'
import {WidgetFormMeta} from '@tesler-ui/core/interfaces/widget'
import {FormWidget, connect, $do} from '@tesler-ui/core'
import {AppState} from 'reducers'
import { Dispatch } from 'redux'

export interface ModalFormWidgetOwnProps {
    meta: WidgetFormMeta
}

export interface ModalFormWidgetProps extends ModalFormWidgetOwnProps {
    visible: boolean,
    onCancel: () => {}
}

const ModalFormWidget: React.FC<ModalFormWidgetProps> = (props) => {
    return <div>
        <Modal visible={props.visible} onCancel={props.onCancel}>
            <FormWidget meta={props.meta} />
        </Modal>
    </div>
}

function mapStateToProps(store: AppState, ownProps: ModalFormWidgetOwnProps) {
    const bcName = ownProps.meta.bcName
    const {widgetName, rowId} = store.view.selectedCell || {}
    const focusedWidget = store.view.widgets.find(item => item.name === widgetName)
    
    return {
        visible: focusedWidget && focusedWidget.bcName === bcName && Boolean(rowId)
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onCancel: () => {
            dispatch({ type: 'CANCEL_MODAL' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFormWidget)
