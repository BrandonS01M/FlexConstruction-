import styled from "styled-components";

const StyledButtons = styled.button`

        background-color: none;
        background: none;
        border: none;

    ${props => props.propsCanceled && ` 
        width: 35vw;
        height: 7vh;
        font-family: 'Abeezee';
        font-size: 1.2rem;
        font-weight: 600;
        background-color: white;
        border: 4px solid #E40000;
        border-radius:10px;
        color: #E40000;
        &:hover{
            background-color: #E40000;
            color: white;
        }
        @media screen and (min-width:500px){
                width:15vw;
                height:7vh;
                font-weight: bold;
                
        }
    `}

    ${props => props.propsCanceled2 && ` 
        width: 35vw;
        height: 7vh;
        font-family: 'Abeezee';
        font-size: 1.2rem;
        font-weight: 600;
        background-color: white;
        border: 4px solid #E40000;
        border-radius:10px;
        color: #E40000;
        &:hover{
            background-color: #E40000;
            color: white;
        }
        @media screen and (min-width:500px){
                width:100%;
                height:7vh;
                font-weight: bold;
                
        }
    `}
    ${props => props.propsBtnSave && `
        width: 35vw;
        height: 7vh;
        font-family: 'Abeezee';
        font-size: 1.2rem;
        font-weight: 600;
        background-color: rgb(255, 255, 255);
        border: 4px solid #FF7F32;
        border-radius:10px;
        color: #1E1E1E;

        &:hover{
            background-color: #FF7F32;
            color:white;
        }

        @media screen and (min-width:500px){
            width:15vw;
        }
    `}

${props => props.propsBtnSave2 && `
        width: 35vw;
        height: 7vh;
        font-family: 'Abeezee';
        font-size: 1.2rem;
        font-weight: 600;
        background-color: rgb(255, 255, 255);
        border: 4px solid #FF7F32;
        border-radius:10px;
        color: #1E1E1E;

        &:hover{
            background-color: #FF7F32;
            color:white;
        }

        @media screen and (min-width:500px){
            width:100%;
        }
    `}

    ${props => props.propsBtnClose && `
        
        border:none;
        width:14vw;
        height:8vh;
        border-radius:10px;
        &:hover{
            background-color:white;
        }
        @media screen and (min-width:500px){
            width:100%;
            position:relative;
            left:-25vh;
        }

    `}
    ${props => props.propsBtnPay && `
        background-color:#101820;
        width:65vw;
        height:6vh;
        font-weight:600;
        border:2px solid #101820;
        font-size:1.2rem;
        color:#FF7F32;
        border-radius:10px;

        &:hover{
            background-color:#FF7F32;
            border:2px solid #FF7F32;
            color: white;
        }

        

        @media screen and (min-width:600px){
            width:100%;
        }
    `}

    ${props => props.propsBtnH && `
        height:5vh;
        width:5vh;
    `}
    ${props => props.propsBtnSend && `
        width:78%;
        height:5vh;
        border-radius:20px;
        background-color:#FF7F32;
        color:white;
        font-weight: 700;

        @media screen and (min-width:500px){
            border-radius:60px;
            font-size:1.2rem;
        }
    `}

    ${props => props.propsEdit && `
        width: 80%;
        height: 7vh;
        border-radius:16px;
        background-color:#101820;
        color:#FF7F32;
        font-weight: 700;
        font-family:'Abeezee';
        font-size:1.12rem;
    `}

    ${props => props.propsBack && `
        width: 80%;
        height: 7vh;
        border-radius:20px;
        color: black ;
        font-weight: 700;
        font-family:'Abeezee';
        font-size:1.12rem;
        border: 4px solid #FF7F32;
    `}
`;

function Buttons({msn,onClick, propsBtnSave, propsBtnSave2, className, src, propsBtnClose,
    propsBtnPay, propsCanceled, propsCanceled2, propsBtnH, propsBtnSend, propsEdit, propsBack}) {
    return ( 
        <StyledButtons propsBtnSave={propsBtnSave} 
        className={className} 
        propsBtnSave2={propsBtnSave2}
        propsCanceled2={propsCanceled2}
        propsCanceled={propsCanceled}
        propsBtnClose={propsBtnClose} 
        propsBtnPay={propsBtnPay}
        propsBtnH={propsBtnH}
        propsBtnSend={propsBtnSend}
        propsEdit={propsEdit}
        propsBack={propsBack}
        onClick={onClick}>
               <img src={src}  />
                {msn}
        </StyledButtons>
     );
}

export default Buttons;