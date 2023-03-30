import styled from "styled-components";

const StyledSubTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #101820;
    ${props => props.propsNP && `
        background-color: azure;
    `}
`;

function SubTitle({msn, propsNP}) {
    return (
        <StyledSubTitle propsNP={propsNP}>{msn}</StyledSubTitle>
    );
}

export default SubTitle;