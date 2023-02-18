import { Checkbox, Form } from 'antd';

import { RegularButton } from '../../components/Button'
import { PasswordInput, RegularInput } from '../../components/Input'
import base from '../../services/base';
import * as S from './Login.style'

const image = require('../../assets/login.png')


const Login = (): JSX.Element => {
    const onFinish = async (values: any) => {
        const login = await base.post('/auth/login', {
            username: values.username,
            password: values.password
        })

        if (login.status === 200) {
            console.log('deu certo')
        }
    };
    return (
        <S.Container>
            <S.LeftContent>
                <S.LeftHeader>
                    <S.Text style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        lineHeight: 1.6
                    }}
                    >
                        MyContacts
                    </S.Text>
                </S.LeftHeader>
                <S.LeftBody>
                    <S.Text style={{
                        fontSize: '1.875rem',
                        fontWeight: '500',
                        lineHeight: 1.6
                    }}
                    >
                        Login
                    </S.Text>
                    <S.GeneralContent>
                        <S.Text style={{
                            lineHeight: 1.6
                        }}>
                            Se você não tem uma conta
                        </S.Text>
                        <S.Text style={{
                            lineHeight: 1.6
                        }}>
                            Você pode <a href="#">Registrar aqui!</a>
                        </S.Text>
                    </S.GeneralContent>
                    <S.FormContent>
                        <Form
                            name='formLogin'
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name='username'
                                rules={[{ required: true, message: 'Insira seu Usuário!' }]}
                            >
                                <RegularInput placeholder='Usuário' />
                            </Form.Item>
                            <Form.Item
                                name='password'
                                rules={[{ required: true, message: 'Insira sua senha!' }]}
                                style={{ marginTop: '3rem' }}
                            >
                                <PasswordInput placeholder='Senha' />
                            </Form.Item>
                            <Checkbox style={{
                                width: '100%',
                                marginTop: '5rem',
                                paddingLeft: '0.5rem'
                            }}
                            >
                                Lembrar de mim
                            </Checkbox>
                            <Form.Item>
                                <RegularButton htmlType='submit'>
                                    Entrar
                                </RegularButton>
                            </Form.Item>
                        </Form>
                    </S.FormContent>
                </S.LeftBody>
            </S.LeftContent>
            <S.RightContent>
                <S.RightBody>
                    <img src={image} style={{ width: '27rem', height: '30rem' }} />
                </S.RightBody>
            </S.RightContent>
        </S.Container >
    )
}

export default Login