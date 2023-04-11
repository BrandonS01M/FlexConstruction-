import styled from "styled-components";
import WrapperTitleD from "../molecules/WrapperTitleD"
import WrapperWorks from "../molecules/WrapperWorks"
import IconEdit from "../../assets/img/Icon_4.svg"

const StyledMEW = styled.main`
    .content-title{
        text-align: center;
        margin: 1% 0 0 0;
    }
    .ContentMainWorks{
        display: block;
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
        .content-title{
            text-align: center;
            margin: 3% 0 0 0;
        }
        .ContentMainWorks{
            display: block;
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

function MainEditWorks() {
    return (
        <StyledMEW>
            <div className="content-title">
                <WrapperTitleD msn="Tus Trabajos"/>
            </div>
            <div className="contentWorks">
                <WrapperWorks msn="fjhdiddjishfjkodfjklsdafh" srcIconTwo={IconEdit} iconDE TW/>
            </div>
        </StyledMEW>
    );
}

export default MainEditWorks;