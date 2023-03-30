import styled from "styled-components";
import "../../assets/styled/Login.css"

const StyledInput = styled.input`
    width: 80%;
    border: 0;
    margin: 0 9%;
    padding: 0% 0% 2% 4%;
    margin-bottom: 6%;
    border-bottom: 2px solid #FF7F32;
    color: black;
    outline: none;
    
    ${props => props.props && `
        border: 0;
        height: 5vh;
        border-bottom: 2px solid #FF7F32;
        color: black;
        width: 80%;
        margin: 2% 10%;
    `}
`;

function Input({type, name, id, value, placeholder, /*color,*/ props}) {
    return (
        <StyledInput type={type} name={name} id={id} placeholder={placeholder} value={value} /*color={color}*/ props={props}/>
    );
}

export default Input;