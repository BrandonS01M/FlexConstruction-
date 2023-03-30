import styled from "styled-components";
import TitleType2 from "../atoms/TitleType2";
import WrapperLogo from "../molecules/WrapperLogo";

const StyledHeader = styled.header`
    display:flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1% ;
    width: 100%;
    box-shadow:
       
        0.3em 0.3em 1em rgba(0,0,0,0.3);


`;

function Header() {
    return (
        <StyledHeader>
            <div>
                <WrapperLogo/>
            </div>

            <div>
            
            </div>           

        </StyledHeader>
    );
}

export default Header;