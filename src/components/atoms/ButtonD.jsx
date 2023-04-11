import styled from "styled-components";

const StyledButton = styled.button`
    border-bottom: 1px solid #FF7F32;
    color: rgb(16, 24, 32);
    width: 100%;   
    ${props => props.propsB && `
        background-color: #101820;
        color: white;
        font-size: 100%;
        border-radius: 25px;
        width: 80%;
        margin: 0 10%;
        margin-bottom: 2%;
    `}
    ${props => props.btnAdm &&`
        color: white;
        width: 40%;
        font-size: 1.2rem;
        margin: 2% 0 2% 6%;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.3);
        border: none;
    `}
`;

function ButtonD({ data, id, onClick, propsB, btnAdm}) {
    return (
        <StyledButton type="button" id={id} onClick={onClick} propsB={propsB} btnAdm={btnAdm}>{data}</StyledButton>
    );
}

export default ButtonD;