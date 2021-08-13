import styled from "styled-components";
import { MediaQuerys } from "../../consts";

interface Props {
    color?: string
}

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 2.1875rem;
    color: ${(props: Props) => props.color ? props.color : "#000"};
    
    ${MediaQuerys.Pixel2}{
        font-size: 2rem;
        margin-bottom: 1.875rem;
    }
    
    ${MediaQuerys.IphoneX}{
        font-size: 1.8rem;
        margin-bottom: 1.5625rem;
    }
    
    ${MediaQuerys.GalaxyFold} {
        font-size: 1.35rem;
        margin-bottom: 1.25rem;
    }
`;