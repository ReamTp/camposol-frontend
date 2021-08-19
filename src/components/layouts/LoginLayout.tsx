import React from 'react';
import { LoginLayoutProps } from '@typesProject/components';
import { Title } from '@commonComp';
import LoginComponent, { BackgroundImg, ContentLogin, ContentRigthComponent, Fondo, Logo, RigthLoginComponent, RowLogin } from '../LoginComponents'

export function LoginLayout(props: LoginLayoutProps) {
    return (
        <ContentLogin>
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
        </ContentLogin>
    )
}