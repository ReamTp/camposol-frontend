import { Form, FormControl, FormGroup } from '../../components/common';
import { LoginLayout } from '../../components/layouts';
import { ButtonLogin } from '../../components/LoginComponents';
import validateData from './validateData';

import fondo from '../../resources/loginBackground.jpg';
import logo from '../../resources/Camposol.png';

export default function Login() {
    return (
        <LoginLayout title="Camposol cuidando de la granja a la familia" backgroundImg={fondo} logo={logo}>
            <Form onSubmit={validateData} method="POST">
                <FormGroup>
                    <FormControl type="email" placeholder="Correo"/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="password" placeholder="Contraseña"/>
                </FormGroup>
                <ButtonLogin type="submit" auto success>Iniciar Sesión</ButtonLogin>
            </Form>
        </LoginLayout>
    )
}
