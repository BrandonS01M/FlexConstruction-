import styled from "styled-components";

const StyledButton = styled.button`
    ${props => props.propBtnH &&`
        background-color: #101820;
        color: white;
        display: flex;
        border: 0;
        border-radius: 25px;
        width: 80%;
        justify-content: center;
        margin: 4% 10%;
        .content{ 
            display: flex;
            padding: 4% 0;
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
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        ${props => props.propBtnH &&`
            background-color: #101820;
            color: white;
            display: flex;
            border: 0;
            border-radius: 25px;
            width: 80%;
            height: 15vh;
            justify-content: center;
            margin: 4% 10%;
            .content{ 
                display: flex;
                padding: 4% 0;
            }
            .imgBtn{
                width: 25%;
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
    }
`;

function ComponentButton({onClick, id, propBtnH, src, data, text}) {
    return (
        <StyledButton type="button" id={id} onClick={onClick} propBtnH={propBtnH}>
            <div className="content">
                <img className="imgBtn" src={src}/>
                <div className="content_text">
                    <div className="content_title">{data}</div>
                    <div className="textSmall">{text}</div>
                </div>
            </div>
        </StyledButton>
    );
}

export default ComponentButton;