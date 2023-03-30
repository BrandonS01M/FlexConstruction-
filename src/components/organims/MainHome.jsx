import WrapperButtom from "../molecules/WrapperButtom"
import WrapperTitle from "../molecules/WrapperTitle";
import WrapperText from "../molecules/WrapperText";
import IconOne from "../../assets/img/Icon_6.svg"
import ImgC from "../../assets/img/img1.svg"
import ImgE from "../../assets/img/img2.svg"

function MainHome() {
    return (
        <main>
            <WrapperTitle msnTitle="Bienvenido" msnSub="a Flex Construction"/>
            <div className="content_button">
                <WrapperButtom data="Nuevo trabajo"
                text="Crea un Proyecto y nuevas ideas" 
                msn_one="Comienza a construir la casa" 
                msn_two="siempre haz querido" 
                msn_three=" Comienza YA!" 
                src={IconOne} 
                srcTxt={ImgC} 
                propBtnH/>
                <WrapperButtom data="Editar trabajo" text="Edita y has cambios necesario" msn_one="Oh! Cualculaste algo mal" msn_two="no te preocupes, puedes editar" msn_three="Comienza YA!" srcTxt={ImgE} srcBtn={IconOne} propBtnH/>
            </div>
            <div className="content">
                <WrapperText msnSub="Tus Trabajos" msnTxt="Da un vistaso a tus trabajos que haz creado!"/>
            </div>
            <div>
                
            </div>
        </main>
    );
}

export default MainHome;