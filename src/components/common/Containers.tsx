import { ContainerProps } from "@typesProject/components";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: ${(props: ContainerProps) => (props.mw1200 ? "1200px" : "100%")};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;