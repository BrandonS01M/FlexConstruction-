import styled from "styled-components";

const StyledSubTitleMedium = styled.h2`
    font-size: .9rem;
    font-family: 'ABeeZee';
    color: #828282;
    transition: 4s;

    @media screen and (min-width:600px){
        font-size: 1.3rem;
    }

    ${props => props.propsNP && `
        background-color: azure;
    `}
`;

function SubTitleMedium({msn, propsNP}) {
    return (
        <StyledSubTitleMedium propsNP={propsNP}>{msn}</StyledSubTitleMedium>
    );
}

export default SubTitleMedium;