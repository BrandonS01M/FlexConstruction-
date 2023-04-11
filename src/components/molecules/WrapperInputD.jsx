import styled from "styled-components";
import LabelD from "../atoms/LabelD";
import InputD from "../atoms/InputD";

const StyledWI = styled.div`
    ${props => props.Adm &&`
        margin: 5% 4% 5% 4%;
    `}
    ${props => props.FW &&`
        text-align: center;
        margin: 0 10% 0 10%;
    `}
`;

function WrapperInputD({type, name, idL, idI, msn, placeholder, color, props, one_prop, two_props}) {
    return (
        <StyledWI Adm={one_prop} FW={two_props}>
            <LabelD id={idL} msn={msn}/>
            <InputD type={type} name={name} id={idI}  placeholder={placeholder} color={color} props={props}/>
        </StyledWI>
    );
}

export default WrapperInputD;