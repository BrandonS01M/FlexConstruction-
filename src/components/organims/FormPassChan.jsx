import WrapperInput from "../molecules/WrapperInput";
import Buttons from "../atoms/Buttons";
import Text from "../atoms/Text";
import '../../assets/styled/FormPassChan.css';

function FormPassChan() {
    return ( 
        <>
            <form className="formPassChanView">
                <WrapperInput type="password" idI="password" idL="password" msn="Nueva Contraseña"/>
                <WrapperInput type="password" idI="password" idL="password" msn="Confirmar Contraseña"/>

                <div className="textContainer">
                    <Text
                    propsTexL2
                    msn="Escriba una nueva contraseña para su perfil, para mayor seguridad asegurece de poner “mayusculas, minusculas y numeros”."/>
                </div>
                <div className="containerBtn">
                    <Buttons 
                    propsCanceled2
                    msn="Cancelar"/>
                    <Buttons
                    propsBtnSave2
                    msn="Guardar"/>
                </div>
            </form>
        </>
     );
}

export default FormPassChan;