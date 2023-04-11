import styled from "styled-components";
import LogoS from "../../assets/img/FC.svg";

const StyledLogo = styled.img`
    width: 100%;
    margin-left: 10%;
    padding: 1% 0%;
    ${props => props.adm &&`
        width: 40%;
    `}
    ${props => props.lp &&`
        width: 100%;
    `}
`

function LogoD({one_prop, two_prop}) {
    return (
        <StyledLogo src={LogoS} alt="Flex Construction" adm={one_prop} lp={two_prop}/>
    );
}

export default LogoD;