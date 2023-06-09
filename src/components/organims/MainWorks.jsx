import styled from "styled-components"
import WrapperTitleD from "../molecules/WrapperTitleD"
import WrapperWorks from "../molecules/WrapperWorks"
import IconDelete from "../../assets/img/Icon_3.svg"
import IconLook from "../../assets/img/Icon_5.svg"


const StyledMW = styled.main`
    .ContentMainWorks{
        display: block;
    }

    .contentTitle{
        text-align: left;
        margin: 10% 0 0 10%;
    }

    .contentWorks{
        margin: 6% 5%;
        width: 90%;
        display: flex;
        flex-direction: column;
        box-shadow:
        inset 0 -3em 3em rgba(186, 186, 186, 0.1),
            0.3em 0.3em 1em rgba(0,0,0,0.3);
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        .ContentMainWorks{
            display: block;
        }

        .contentTitle{
            text-align: center;
            margin: 3% 0 0 0;
        }

        .contentWorks{
            margin: 3% 20%;
            width: 60%;
            display: flex;
            flex-direction: column;
            box-shadow:
            inset 0 -3em 3em rgba(186, 186, 186, 0.1),
                0.3em 0.3em 1em rgba(0,0,0,0.3);
        }
    }

`;

function MainWorks() {
    return (
        <StyledMW className="ContentMainWorks">
            <div className="contentTitle">
                <WrapperTitleD msn="Tus Trabajos"/>
            </div>
            <div className="contentWorks">
                <WrapperWorks msn="fjhdiddjishfjkodfjklsdafh" srcIconOne={IconLook} srcIconTwo={IconDelete} iconLook iconDE TW/>
            </div>
        </StyledMW>
    );
}

export default MainWorks;