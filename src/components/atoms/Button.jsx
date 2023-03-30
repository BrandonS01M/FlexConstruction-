import styled from "styled-components";

const StyledButton = styled.button`
    border: 0;
    background-color: black;
    font-size: 1rem;
    
    font-weight: bold;
    width: 100%;
    height: 8%;
    padding: 1% 1%;
    ${props => props.propsB && `
        background-color: black;
        color: white;
        font-size: 100%;
        border-radius: 25px;
        width: 50%;
        margin: 0 25%;
        margin-bottom: 2%;
    `}
    ${props => props.propBtnH &&`
        background-color: #101820;
        color: white;
        display: flex;
        border-radius: 18px;
        width: 100%;
        justify-content: center;
        .content{
            display: flex;
            padding: 2% 0;
        }
        .imgBtn{
            width: 15%;
            margin: 3% 8% 1% 0%;
        }
        .content_text{
            text-align: left;
        }
        .content_title{
            font-size: 1.2rem;
        }
        .textSmall{
            font-size: .5rem;
        }
    `}

   
`;

function Button({onClick, id, propsB, propBtnH, src, data, text, propsBtnCanceled }) {
    return (
        <StyledButton type="button" id={id} onClick={onClick} propBtnH={propBtnH} propsB={propsB} propsBtnCanceled={propsBtnCanceled}>
            <div className="content">
                <img className="imgBtn" src={src} />
                <div className="content_text">
                    <div className="content_title">{data}</div>
                    <div className="textSmall">{text}</div>
                </div>
            </div>
            </StyledButton>
    );
}

export default Button;