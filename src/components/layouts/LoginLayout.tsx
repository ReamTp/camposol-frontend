import React from 'react'
import { Container, Title } from '../common'
import LoginComponent, { BackgroundImg, ContentRigthComponent, Fondo, Logo, RigthLoginComponent, RowLogin } from '../LoginComponents'

type Props = {
    title: string,
    backgroundImg: string,
    logo: string,
    children?: React.ReactNode
}

export function LoginLayout(props: Props) {
    return (
        <Container>
            <RowLogin>
                <LoginComponent>
                    <BackgroundImg src={props.backgroundImg} alt="Fondo" />
                    <Fondo/>
                </LoginComponent>
                <RigthLoginComponent>
                    <ContentRigthComponent>
                        <Logo src={props.logo} alt="Logo"/>
                        <Title color="#FFFFFF">{props.title}</Title>

                        {props.children}
                    </ContentRigthComponent>
                </RigthLoginComponent>
            </RowLogin>
        </Container>
    )
}