import React, {FunctionComponent} from 'react'
import {connect, $do, useTranslation} from '@tesler-ui/core'
import {Form, Input, Button, Icon} from 'antd'
import {AppState} from 'reducers'
import {Dispatch} from 'redux'
import styles from './Login.less'

export interface LoginProps {
    spin: boolean,
    errorMsg: string,
    onLogin: (login: string, password: string) => void
}

export const Login: FunctionComponent<LoginProps> = (props) => {
    const {t} = useTranslation();
    const [login, setLogin] = React.useState('vanilla')
    const [password, setPassword] = React.useState('vanilla')

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleClick = (event: React.FormEvent<HTMLFontElement>) => {
        event.preventDefault()
        props.onLogin(login, password)
    }

    return <Form onSubmit={handleClick}>
        <Form.Item>
            <Input
                prefix={<Icon type="user" />}
                placeholder="Username"
                value={login}
                onChange={handleLogin}
            />
        </Form.Item>
        <Form.Item>
            <Input.Password
                prefix={<Icon type="lock" />}
                placeholder="Password"
                value={password}
                onChange={handlePassword}
            />
        </Form.Item>
        <Form.Item>
            <Button
                block
                autoFocus
                loading={props.spin}
                type="primary"
                htmlType="submit"
            >
                {t('Sign in')}
            </Button>
            <span className={styles.error}>
                {props.errorMsg}
            </span>
        </Form.Item>
    </Form>
}

function mapStateToProps(store: AppState) {
    return {
        spin: store.session.loginSpin,
        errorMsg: store.session.errorMsg
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLogin: (login: string, password: string) => {
            dispatch($do.login({ login, password }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
