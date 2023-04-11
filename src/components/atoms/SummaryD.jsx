import styled from "styled-components";

const StyledSummary = styled.summary`
    color: white;
    background-color: #101820;
    width: 100%;
    height: 6vh;
    text-align: left;
    border-radius: 5px;
    ${props => props.propIcon && `
        background-color: #101820;
        text-align: left;
        width: 100%;
        height: 6vh;
        text-align: center;
        border-radius: 5px;
        .Icon_Accordion{
            width: 10%;
            margin: 3% 0% 3% 40%;
        }
    `}
    ${props => props.MP && `
        background-color: #101820;
        text-align: left;
        width: 100%;
        height: 3vh;
        text-align: center;
        border-radius: 5px;
    `}
    
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        color: white;
        background-color: #101820;
        text-align: left;
        width: 100%;
        height: 6vh;
        text-align: center;
        border-radius: 5px;
        ${props => props. propIcon && `
            background-color: #101820;
            width: 100%;
            height: 6vh;
            text-align: center;
            border-radius: 5px;
            .Icon_Accordion{
                    width: 3%;
                    margin: 1% 0% 1% 70%;
            }
        `}
        ${props => props.MP && `
        background-color: #101820;
        text-align: left;
        width: 100%;    
        height: 5vh;
        text-align: center;
        border-radius: 5px;
        `}
    }
`;

function SummaryD({msn, src, alt, propIcon, one_prop}) {
    return (
        <StyledSummary propIcon={propIcon} MP={one_prop}>
            {msn}
            <span><img src={src} alt={alt} className="Icon_Accordion"/></span>
        </StyledSummary>
    );
}

export default SummaryD;