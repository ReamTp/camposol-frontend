import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoNav = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 4rem;
    font-weight: 500;

    &:hover {
        img {
            -webkit-animation: rotate-center 0.6s ease-in-out both;
                animation: rotate-center 0.6s ease-in-out both;
        }
    }

    img {
        margin-right: .5rem;
        width: 2rem;
    }
`;