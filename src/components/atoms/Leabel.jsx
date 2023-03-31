import styled from "styled-components";

const StyledLeabel = styled.label`
    color: #101820;
    font-size: .8rem;
    margin-left: 3vw;
    padding: 0% 5% 0% 0%;
`;

function Label({id, msn}) {
    return (
        <StyledLeabel id={id}>{msn}</StyledLeabel>
    );
}

export default Label;