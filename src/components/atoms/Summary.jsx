import styled from "styled-components";

const StyledSummary = styled.summary`
    color: white;
    background-color: #101820;
    text-align: left;
    width: 100%;
    height: 6vh;
    text-align: center;
    border-radius: 5px;
    ${props => props. propIcon && `
        background-color: #101820;
        text-align: left;
        width: 100%;
        height: 6vh;
        text-align: center;
        border-radius: 5px;
        .Icon_Accordion{
            width: 3%;
            margin: 0.5% 0% 1% 70%;
        }
    `}
`;

function Summary({msn, src, alt, propIcon}) {
    return (
        <StyledSummary propIcon={propIcon}>
            {msn}
            <span><img src={src} alt={alt} className="Icon_Accordion"/></span>
        </StyledSummary>
    );
}

export default Summary;