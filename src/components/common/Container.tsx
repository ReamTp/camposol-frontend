import styled from "styled-components";

interface Props {
    mw1200?: any;
}

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: ${(props: Props) => (props.mw1200 ? "1200px" : "100%")};
`;