import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    border: 0;
    margin-bottom: 6%;
    border-bottom: 2px solid #FF7F32;
    color: #101820;
    outline: none;
`;

function InputD({type, name, id, placeholder}) {
    return (
        <StyledInput type={type} name={name} id={id} placeholder={placeholder}/>
    );
}

export default InputD;