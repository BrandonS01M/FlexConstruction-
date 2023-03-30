import styled from "styled-components";
import LogoUno from "../../assets/img/Logouno.svg"

const StyledLogo = styled.img`
    width: 10vh;
    margin-left: 10%;
    padding: 1% 0%;

    @media screen and (min-width:500px){
        width: 13vh;
        margin-left: 3vw;
    }
`;

function Logo() {
    return (
        <StyledLogo src={LogoUno} alt="Flex Construction"/>
    );
}

export default Logo;