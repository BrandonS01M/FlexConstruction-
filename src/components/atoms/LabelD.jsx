import styled from "styled-components";

const StyledLeabel = styled.label`
    color: #101820;
    font-size: 1rem;
    padding: 0% 5% 0% 0%;
`;

function LabelD({id, msn}) {
    return (
        <StyledLeabel id={id}>{msn}</StyledLeabel>
    );
}

export default LabelD;