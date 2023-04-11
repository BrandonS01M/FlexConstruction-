import styled from "styled-components";

const StyledText = styled.p`
    font-size: 1rem;
    color: white;
    ${props => props.txtH && `
        margin: 5% 0;
        color: #101820;
        .txt{
            color: #FF7F32;
        }
    `}
    ${props => props.infH && `
        margin: 10% 0;
        font-size: 1.3rem;
        color: #FF7F32;
    `}
    ${props => props.infTxtH && `
        font-size: 1.3rem;
        color: white;
        margin: 0 3% 0 0;
        text-align: right;
    `}
    ${props => props.txtB &&` 
        color: white;
        font-size: 0.7rem;
        display: block;
        margin: 6% 3% 0 5%;
        text-align: justify;
    `}
    ${props => props.nm &&`
        font-size: 0.5rem;
    `}
    ${props => props.WAT &&`
        font-size: 1rem;
        color: #FF7F32;
        margin: 0 3% 1% 3%;
    `}
    ${props => props.MW &&`
        font-size: 1rem;
        color: #101820;
    `}
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        font-size: 1rem;
        color: white;
        ${props => props.txtH && `
            margin: 5% 0;
            color: #101820;
            .txt{
                color: #FF7F32;
            }
            font-size: 1.5rem;
        `}
        ${props => props.infH && `
            margin: 10% 0;
            font-size: 1.3rem;
            color: #FF7F32;
        `}
        ${props => props.infTxtH && `
            font-size: 1.3rem;
            color: white;
            margin: 0 3% 0 0;
            text-align: right;
        `}
        ${props => props.txtB &&` 
            color: white;
            font-size: 0.7rem;
            display: block;
            margin: 6% 3% 0 5%;
            text-align: justify;
        `}
        ${props => props.nm &&`
            margin: 6% 0 6% 0;
            font-size: 1rem;
        `}
        ${props => props.WAT &&`
            font-size: 1rem;
            color: #FF7F32;
            margin: 0 3% 1% 3%;
        `}
        ${props => props.MW &&`
            font-size: 1rem;
            color: #101820;
        `}
    }
`;

function TextD({msn, txt, txtH, infH, infTxtH, txtB, one_prop, two_prop, three_prop}) {
    return (
        <StyledText txtH={txtH} infH={infH} infTxtH={infTxtH} txtB={txtB} nm={one_prop} WAT={two_prop} MW={three_prop}>
            {msn}
            <samp className="txt">{txt}</samp>
        </StyledText>
    );
}

export default TextD;