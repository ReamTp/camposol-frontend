import styled from "styled-components";
import { MediaQuerys } from "../../consts";

export const Form = styled.form`
    display: block;
`;

export const FormGroup = styled.div`
    width: 80%;
    margin: 0 auto;

    input {
        font-size: 1.125rem;
        margin-bottom: 1.875rem;

        ${MediaQuerys.GalaxyFold}{
            font-size: 0.625rem;
            margin-bottom: 1.25rem;
        }
    }    
`;
    
export const FormControl = styled.input`
    display: block;
    color: #6C7595;
    width: 100%;
    height: 2.375rem;
    padding: .375rem .75rem;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #CED4DA;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    ${MediaQuerys.GalaxyFold}{
        height: 1.625rem;
    }
`;