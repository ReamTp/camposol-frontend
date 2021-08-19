import { ContentPageProps } from "@typesProject/components";
import styled from "styled-components";

export const NavContent = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    height: 4rem;
`;

export const ContentPage = styled.div`
    margin-top: ${(props: ContentPageProps) => `${props.height}px`};
`;