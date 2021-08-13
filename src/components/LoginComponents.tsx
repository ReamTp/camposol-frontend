import styled from 'styled-components';
import { MediaQuerys } from '../consts';
import { Button, Column, Image, Row } from './common';

export const RowLogin = styled(Row)`
    ${MediaQuerys.iPad}{
        flex-flow: column;
    }
`;

const LoginComponent = styled(Column)`
    width: 100%;
    heigth: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    ${MediaQuerys.iPad}{
        flex-basis: auto;
    }

    ${MediaQuerys.iPad}{
        order: 1;
    }
`;

export const RigthLoginComponent = styled(LoginComponent)`
    background-color: #464646;
    flex-flow: column wrap;

    ${MediaQuerys.iPad}{
        order: 0;
    }
`;

export const ContentRigthComponent = styled.div`
    width: 80%;
    height: 70%;
`;

export const BackgroundImg = styled(Image)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export const Logo = styled(Image)`
    width: 4.6875rem;
    margin-bottom: 1.5625rem;

    ${MediaQuerys.iPad}{
        width: 4.375rem;
    }

    ${MediaQuerys.SurfaceDuo}{
        width: 4.0625rem;
    }

    ${MediaQuerys.Pixel2}{
        width: 3.4375rem;
    }

    ${MediaQuerys.GalaxyFold}{
        width: 2.5rem;
    }
`;

export const Fondo = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(70, 70, 70, 0.35);
    z-index: 1;

    ${MediaQuerys.iPad}{
        position: absolute;
    }
`;

export const ButtonLogin = styled(Button)`
    display: block;
    width: 80%;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.625rem;
    border-radius: 15rem;

    ${MediaQuerys.Pixel2}{
        font-size: 1rem;
        padding: .5625rem;
    }

    ${MediaQuerys.MotoG4}{
        font-size: .875rem;
    }

    ${MediaQuerys.GalaxyFold}{
        font-size: .75rem;
        padding: .4375rem;
    }
`;

export default LoginComponent;