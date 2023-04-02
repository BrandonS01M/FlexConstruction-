import styled from "styled-components";

const StyledInputsC = styled.input`

    backgroun-color:none;    

    ${props => props.propsInputsChange && `
        height:3vh;
        width:120%;
        outline: 0;
        font-size:1.4rem;
        border:0;
        font-family:'Abeezee';
        color: #555555;

        @media screen and (min-width:600px){
            width:150%;
        }
    `}
`;

function InputsC({propsInputsChange, idInpC}) {
    return ( 
        <StyledInputsC
        propsInputsChange={propsInputsChange}
        idInpC={InputsC}>
        </StyledInputsC>
     );
}

export default InputsC;

