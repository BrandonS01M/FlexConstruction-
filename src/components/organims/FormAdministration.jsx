 import styled from "styled-components";
 import WrapperInputD from "../molecules/WrapperInputD";
 import TextD from "../atoms/TextD";
 import TitleD from "../atoms/TitleD";
 import ButtonD from "../atoms/ButtonD";


 const StyledFA = styled.form`

    .content-background{
        width: 100%;
        margin: 0;
        padding: 0;
        text-align: center;
        height: 35vh;
        background: linear-gradient(272.51deg, #FF7F32 18.75%, #FBC235 78.96%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .content-building-materials{
        margin: -45% 15% 0 15%;
        position: absolute;
        border-radius: 25px;
        z-index: 1;
        width: 70%;
        max-height: 100%;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
    }

    .content-button{
        display: flex;
        width: 80%;
        margin: 55% 10% 0 10%;
        border-radius: 15px;
        background: linear-gradient(272.51deg, #FF7F32 18.75%, #FBC235 78.96%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .text-grup-button{
        width: 50%;
        margin: -2% 0 0 0;
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        .content-background{
            width: 100%;
            text-align: center;
            height: 45vh;
            background: linear-gradient(272.51deg, #FF7F32 18.75%, #FBC235 78.96%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .content-building-materials{
            margin: -18% 30% 0 30%;
            position: absolute;
            border-radius: 25px;
            z-index: 1;
            width: 40%;
            max-height: 100%;
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
        }

        .content-button{
            display: flex;
            width: 40%;
            margin: 17% 30% 0 30%;
            border-radius: 15px;
            background: linear-gradient(272.51deg, #FF7F32 18.75%, #FBC235 78.96%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .text-grup-button{
            width: 50%;
            margin: -2% 0 0 0;
        }
    }
 `;

 function FormAdministration() {
    return (
        <StyledFA>
            <div className="content-background">
                <TitleD msn={"Apartado Administratorio de Infroamcion de Materiales "} two_prop/>
            </div>
            <div className="content-building-materials">
                    <WrapperInputD type="number" placeholder="12983" msn="id:" one_prop/>
                    <WrapperInputD type="text" placeholder="Ladrillo" msn="Nombre:" one_prop/>
                    <WrapperInputD type="number" placeholder="22" msn="Precio:" one_prop/>
                    <WrapperInputD type="text" placeholder="Cemento Cruz-Azul" msn="Marca:" one_prop/>
            </div>
            <div className="content-button">
                    <div className="text-grup-button">
                        <TextD msn="Registra los marteriales para" txt=" tener un mejor control." txtB/>
                    </div>
                    <ButtonD onClick={"handelClick"} data="Subir Datos" btnAdm/>
            </div>
        </StyledFA>
    );
 }
 
 export default FormAdministration;