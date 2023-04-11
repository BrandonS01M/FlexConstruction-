import styled from "styled-components";
import WrapperMenu from "../molecules/WrapperMenu";
import WrapperTitleD from "../molecules/WrapperTitleD";
import TextD from "../atoms/TextD";
import Logo from "../atoms/Logo";

const StyledHeader = styled.header`
    background-color: #101820;
    width: 100%;
    display: flex;
    flex-direction: row;
    .name{
        text-align: center;
        width: 25%;
    }
    .name-proyect{
        width: 25%;
    }
    .logo{
        width: 30%;
    }
    .menu{
        width: 20%;
    }
    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        background-color: #101820;
        width: 100%;
        display: flex;
        height: 10vh;
        flex-direction: row;
        .name{
            text-align: center;
            width: 25%;
        }
        .name-proyect{
            width: 25%;
        }
        .logo{
            width: 13%;
        }
        .menu{
            width: 20%;
        }
    }
`;

function HeaderProyect() {
    return ( 
        <StyledHeader>
            <div className="name">
                <TextD msn={"David Antonio Gomez Gonzalez"} one_prop/>
            </div>
            <div className="name-proyect ">
                <WrapperTitleD msn={"Nombre del Proyecto:"} next={"..."} one_prop/>
            </div>
            <div className="logo">
                <Logo two_prop/>
            </div>
            <div className="menu">
                <WrapperMenu one_prop/>
            </div>
        </StyledHeader>
     );
}

export default HeaderProyect;