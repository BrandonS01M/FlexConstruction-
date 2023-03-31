import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #101820;
    ${props => props.propsT &&`
        text-align: center;
        margin-bottom: 4%;
        font-size:1.4rem;
        transition:2s;

        @media screen and (min-width:500px){
            font-size: 2rem;
        }
    `}

    ${props => props.propsTitleType2 && `
       font-size: 1.8rem; 
       color: #101820;
       font-family:'Abeezee';
       font-weight:100;
    `}

    ${props => props.propsTitletype3 && `
        font-size:1rem;
        color:white;
        font-family:'Abeezee';
    `}

    ${props => props.propsCards && `
        font-size:1.2rem;
        color:white;
        font-family:'M PLUS Rounded 1c';   
        
        @media screen and (min-width:500px){
            font-size:1.8rem;
        }
    `}

    ${props => props.propsInfo && `
        font-size:1.9rem;
        color:#FBC235;

        @media screen and (min-width:500px){
            font-size:3rem;
        }
    `}
    ${props => props.propsTyInf && `
        font-size: 1.1rem;
        color:white;
        font-family: 'Abeezee';

        @media screen and (min-width:500px){
            font-size:2rem;
        }
    `}

    ${props => props.propsExe && `
        font-size: 1rem;
        margin:1vh;

        @media screen and (min-width:500px){
            font-size: 1.5rem;
            margin:2vh;
        }
    `}
    ${props => props.propsTitleVist && `
        font-size: 1.4rem;
        font-family: 'Abeezee';
        transition: 3s;

        @media screen and (max-width:500px){
            display:none;
        }
    `}
    ${props => props.propsTitleVist2 && `
        font-size: 1rem;
        margin-right:5vh;
        margin-top:1vh;
        font-family: 'Abeezee';
        transition: 3s;

        @media screen and (min-width:500px){
            display:none;
        }
    `}


`;

function Title({msn, propsT, propsTitleType2, propsTitletype3, 
    className, propsCards, propsInfo, propsTyInf, propsExe,
    propsTitleVist, propsTitleVist2}) {
    return (
        <StyledTitle propsT={propsT}
         propsTitleType2={propsTitleType2}
         propsTitletype3={propsTitletype3}
         className={className} 
         propsCards={propsCards}
         propsInfo={propsInfo}
         propsTyInf={propsTyInf}
         propsExe={propsExe}
         propsTitleVist={propsTitleVist}
         propsTitleVist2={propsTitleVist2}
         >{msn}</StyledTitle>
    );
}

export default Title;