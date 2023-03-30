import styled from "styled-components";
import IEdit from "../../assets/img/IconEdit.svg"

const StyledButtonEdit = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 100px;
    background-color:#101820;
    margin-bottom: 40%;
    transition: 4s;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 600px){
        height: 45px;
        width: 45px;

    }

`;

function ButtonEdit({onClick, id}) {
    return (
        <StyledButtonEdit type="button" id={id} onClick={onClick}>
                <img src={IEdit} alt="icono de edit"/>
            </StyledButtonEdit>
    );
}

export default ButtonEdit;