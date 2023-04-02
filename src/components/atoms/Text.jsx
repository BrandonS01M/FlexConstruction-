import styled from "styled-components";

const StyledText = styled.p`
    color: white;
    font-size: .68rem;

    ${props => props.propsTexL && `
       color: white;
       font-size: .68rem; 

       @media screen and (min-width:500px){
        font-size: 1rem;
       }
    `}
    ${props => props.propsTexL2 && `
       color: black;
       font-size: .68rem; 

       @media screen and (min-width:500px){
        font-size: 1rem;
       }
    `}

    ${props => props.propsFooter && `
        font-size: .45rem;

        @media screen and (min-width:500px){
            font-size: .7rem;
        }
    `}
    ${props => props.propsExe && `
        color:Black;
        font-size:.9rem;

        @media screen and (min-width:500px){
            font-size:1.1rem;  
        }
    `}
`;

function Text({className, msn, propsTexL, propsFooter, propsExe,propsTexL2}) {
    return (
        <StyledText className={className}
        propsTexL={propsTexL} 
        propsFooter={propsFooter}
        propsExe={propsExe}
        propsTexL2={propsTexL2}
        >{msn}</StyledText>
    );
}

export default Text;