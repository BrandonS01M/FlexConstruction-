import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: #101820;
    ${props => props.propsT &&`
        text-align: center;
        margin-bottom: 4%;
    `}
    ${props => props.TMW && `
        font-size: 1rem;
        color: #FF7F32;
        margin: 5% 3%;
        .samp{
            color: white;
        }
    `}
    ${props => props.TW && `
        font-size: 1rem;
        color: white;
        margin: 3% 0% 0% 5%;
    `}
    ${props => props.hp &&`
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 0.5rem;
    `}
    ${props => props.FA && `
        font-size: 1rem;
        color: white;
        margin: 0 0 0 5%;
    `}
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        font-size: 1.5rem;
        font-weight: bold;
        color: #101820;
        ${props => props.propsT &&`
            margin-top: 2%;
            text-align: center;
            margin-bottom: 4%;
        `}
        ${props => props.TMW && `
            font-size: 2rem;
            color: #FF7F32;
            margin: 4% 5%;
            .samp{
                color: white;
            }
        `}
        ${props => props.TW && `
            font-size: 1rem;
            color: white;
            margin: 6% 0% 6% 15%;
        `}
        ${props => props.hp &&`
            color: white;
            display: flex;
            flex-direction: column;
            text-align: center;
            font-size: 1rem;
            margin: 4% 0 4% 0;
        `}
        ${props => props.FA && `
            font-size: 1.3rem;
            color: white;
            margin: 0 0 0 0;
        `}
    }
`;

function TitleD({msn, next, propsT, TW, TMW, one_prop, two_prop}) {
    return (
        <StyledTitle TW={TW} TMW={TMW} propsT={propsT} hp={one_prop} FA={two_prop}>
            {msn}
            <samp className="samp">{next}</samp>
        </StyledTitle>
    );
}

export default TitleD;