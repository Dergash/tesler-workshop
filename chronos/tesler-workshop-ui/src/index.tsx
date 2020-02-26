import 'imports/shim'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from '@tesler-ui/core'
import {reducers} from 'reducers'
import {epics} from 'epics'
import Layout from 'components/AppLayout/AppLayout'
import {axiosInstance} from 'api/session'
import './antd.less'
import 'imports/rxjs'
import {LocaleProvider} from 'antd'
import enUs from 'antd/es/locale-provider/en_US'

const App = <Provider
    customReducers={reducers}
    customEpics={epics}
    axiosInstance={axiosInstance}

    >
    <LocaleProvider locale={enUs}>
        <Layout/>
    </LocaleProvider>
</Provider>

render(App, document.getElementById('root'))
