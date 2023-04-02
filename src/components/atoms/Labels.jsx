import styled from "styled-components";

const StyledLabels = styled.label`
    ${props => props.propsLabel1 && `
        font-size: 1.1rem;
        font-family: 'ABeeZee';
        font-weight: 200;
        color: #101820;
        transition: 4s;
    `
    }
`

function Labels({msn, propsLabel1}) {
    return ( 
        <StyledLabels
        propsLabel1={propsLabel1}>{msn}</StyledLabels>
     );
}

export default Labels;