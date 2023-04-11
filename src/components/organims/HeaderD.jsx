import styled from "styled-components";
import WrapperLogoD from "../molecules/WrapperLogoD";
import WrapperMenu from "../molecules/WrapperMenu";

const StyledHeader = styled.header`
    display:flex;
    background-color: white;
    justify-content: space-between;
    border-bottom: 1% ;
    width: 100%;
    height: 6vh;
    .nav{
        width: 30%;
    }
    .img{
        width: 30%;
    }
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        display:flex;
        background-color: white;
        justify-content: space-between;
        border-bottom: 1% ;
        width: 100%;
        height: 10vh;
        .nav{
            width: 30%;
        }   
        .img{
            width: 13%;
        }
    }
`;

function HeaderD() {
    return (
        <StyledHeader>
            <div className="img">
                <WrapperLogoD prop/>
            </div>
            <div className="nav">
                <WrapperMenu />
            </div>
        </StyledHeader>
    );
}

export default HeaderD;