import { Form, FormControl, FormGroup } from '../../common';
import { LoginLayout } from '../../layouts';
import { ButtonLogin } from '../../LoginComponents';

import fondo from '../../../resources/loginBackground.jpg';
import logo from '../../../resources/Camposol.png';

export default function Login() {
    return (
        <LoginLayout title="Camposol cuidando de la granja a la familia" backgroundImg={fondo} logo={logo}>
            <Form method="POST">
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
