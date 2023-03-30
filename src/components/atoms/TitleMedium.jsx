import styled from "styled-components";

const StyledTitleMedium = styled.h1`
    font-size: 1.1rem;
    font-family: 'ABeeZee';
    font-weight: 200;
    color: #101820;
    transition: 4s;

    @media screen and (min-width:600px){
        font-size: 1.6rem;
    }
`;

function TitleMedium({msn}) {
    return (
        <StyledTitleMedium>{msn}</StyledTitleMedium>
    );
}

export default TitleMedium;