import React from 'react'
import {connect, buildBcUrl, TemplatedTitle} from '@tesler-ui/core'
import Operations from 'components/Operations/Operations'
import {WidgetMeta, WidgetTypes} from '@tesler-ui/core/interfaces/widget'
import {Operation, OperationGroup} from '@tesler-ui/core/interfaces/operation'
import {AppState} from 'reducers/index'
import cn from 'classnames'
import * as styles from './Card.less'

export interface CardOwnProps {
    children: React.ReactNode,
    meta: WidgetMeta
}

export interface CardStateProps {
    operations: Array<Operation | OperationGroup>,
    viewName: string,
}

const showOperations = [WidgetTypes.List, WidgetTypes.DataGrid, WidgetTypes.Form]

export function Card(props: CardOwnProps & CardStateProps) {
    return <div className={cn(styles.container, {
        [styles.listContainer]: props.meta.type === WidgetTypes.List && !props.meta.title
    })}>
        <h2
            className={styles.title}>
            <TemplatedTitle
                widgetName={props.meta.name}
                title={props.meta.title}
            />
        </h2>
        <div>
            {props.meta.type === WidgetTypes.Form && props.children}
            { showOperations.includes(props.meta.type as WidgetTypes)
                && <Operations
                    operations={props.operations}
                    bcName={props.meta.bcName}
                    widgetMeta={props.meta}
                    hiddenGroups={props.meta.options && props.meta.options.hideActionGroups}
                    formStyle={props.meta.type === WidgetTypes.Form}
                />
            }
            {props.meta.type !== WidgetTypes.Form && props.children}
        </div>
    </div>
}

function mapStateToProps(store: AppState, ownProps: CardOwnProps): CardStateProps {
    const bcName = ownProps.meta.bcName
    const bcUrl = store.screen.bo.bc[bcName] && buildBcUrl(bcName, true)
    const operations = store.view.rowMeta[bcName]
        && store.view.rowMeta[bcName][bcUrl]
        && store.view.rowMeta[bcName][bcUrl].actions
    return {
        operations,
        viewName: store.view.name
    }
}

export default connect(mapStateToProps)(Card)
