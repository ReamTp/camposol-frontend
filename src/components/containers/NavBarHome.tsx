import { Container, LogoNav, Nav } from '@commonComp';
import { NavContent } from '../HomeComponents';
import logo from '@resources/Camposol.png';
import { NavBarHomeProps } from '@typesProject/components';

export const NavBarHome = (props: NavBarHomeProps) => {
    return (
        <NavContent ref={props.reference}>
            <Container mw1200 style={{padding: "0 1rem"}}>
                <LogoNav to="/">
                    <img src={logo} alt="LogoIcon" />
                    <span style={{fontSize: "2rem"}}>Camposol&reg;</span>
                </LogoNav>
                <button type="button"></button>
                <Nav></Nav>
            </Container>
        </NavContent>
    )
}
