import styled from "styled-components";

const StyledSubTitle = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    color: #101820;
    ${props => props.propsNP && `
        background-color: azure;
    `}
    ${props => props.subH && `
        margin: 10% 0;
        color: white;
    `}
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        font-size: 1rem;
        font-weight: bold;
        color: #101820;
        ${props => props.propsNP && `
            font-size: 1rem;
            background-color: azure;
        `}
        ${props => props.subH && `
            margin: 10% 0;
            color: white;
            font-size: 1.4rem;
        `}
    }
`;

function SubTitleD({msn, propsNP, subH}) {
    return (
        <StyledSubTitle subH={subH} propsNP={propsNP}>{msn}</StyledSubTitle>
    );
}

export default SubTitleD;