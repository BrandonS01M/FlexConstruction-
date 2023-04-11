import styled from "styled-components";
import WrapperButtomD from "../molecules/WrapperButtomD"
import TextureTitle from "../molecules/TextureTitle";
import WrapperTextD from "../molecules/WrapperTextD";
import TextD from "../atoms/TextD";
import IconOne from "../../assets/img/Icon_6.svg"
import ImgC from "../../assets/img/img1.svg"
import ImgE from "../../assets/img/img2.svg"
import IconWorks from "../../assets/img/Icon_7.svg"

const StyledMH = styled.main`
    .CntainerMain{
        background-color: azure;
        display: block;
    }

    .contentSud{
        margin: 6% 2.5%;
        width: 95%;
        display: flex;
    }

    .contentWorks{
        background-color: rgba(255, 255, 255, 0.534);
        width: 90%;
        margin: 0 5%;
    }

    .contentButton{
        padding: 0 0;
        display: block;
        margin: 5% 0;
        background-color: #101820;
        width: 100%;
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        .CntainerMain{
            background-color: azure;
            display: block;
        }

        .contentSud{
            margin: 1% 15%;
            width: 70%;
            display: flex;
        }

        .contentWorks{
            background-color: rgba(255, 255, 255, 0.534);
            width: 60%;
            margin: 0 20%;
            z-index: 1;
        }

        .contentButton{
            padding: 2% 0;
            display: block;
            margin: 5% 0 1% 0;
            background-color: #101820;
            width: 100%;
        }
        .work{
            text-align: center;
            border-radius: 20px;
            width: 90%;
            margin: 1% 5% 1% 5%;
            background-color: #101820;
        }
        .background{
            width: 100%;
            height: 20vh;
            margin: 1% 0 0 0;
            background: #242439;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`;

function MainHome() {
    return (
        <StyledMH className="CntainerMain">
            <TextureTitle msn="Bienvenido " next="a Flex Contruction" TMW/>
            <div className="contentButton">
                <WrapperButtomD data="Nuevo trabajo" text="Crea un Proyecto y nuevas ideas" msn_one="Comienza a construir la casa" msn_two="siempre haz querido" msn_three=" Comienza YA!" srcBtn={IconOne} src={ImgC} propBtnH infH imgH infTxtH/>
                <WrapperButtomD data="Editar trabajo" text="Edita y has cambios necesario" msn_one="Oh! Cualculaste algo mal" msn_two="no te preocupes, puedes editar" msn_three="Comienza YA!" src={ImgE} srcBtn={IconOne} propBtnH infH imgH infTxtH/>
            </div>
            <div className="contentSud">
                <WrapperTextD msnSub="Tus Trabajos" msnTxt="Da un vistaso a tus trabajos que haz" txt=" Creado!" src={IconWorks} txtH iconWorks subH/>
            </div>
            <div className="contentWorks">
                <div className="work">
                    <TextD msn={"Casa-Habitacion 1"}/>
                </div>
                <div className="work">
                    <TextD msn={"Casa-Habitacion 2"}/>
                </div>
            </div>
            <div className="background"></div>
        </StyledMH>
    );
}

export default MainHome;