import styled from "styled-components";

const StyledInputs = styled.input`
    width: 65vw;
    height: 6vh;
    border: 2px solid #FF7F32;
    border-radius: 10px;
    padding: 0% 0% 0% 5%;
    font-size: .9rem;
    outline: none;

    @media screen and (min-width:500px){
        width: 100%;

    }

    ${props => props.propsInputType2 && `
        width: 30vw;
    `}
`;

function Inputs({placeholder, propsInputType2}) {
    return ( 
        <StyledInputs placeholder={placeholder} propsInputType2={propsInputType2}/>
     );
}

export default Inputs;