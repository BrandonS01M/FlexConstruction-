import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Buttons from "../atoms/Buttons";
import Lock from "../../assets/img/Icons/Lock.svg"
import "../../assets/styled/ChangePassNew.css";


function FormNewPass() {
    return ( 
        <>
            <form className="newPassword-Form">
                <Title
                propsT
                msn="Cambio de Contraseña"/>
                <WrapperInput type="password" idI="user" idL="user" msn="Nueva Contraseña"/>
                <WrapperInput type="password" idI="password" idL="password" msn="Confirma contraseña"/>
            <div className="btnActions">
                <Buttons 
                    propsBtnSend
                    msn="Guardar Constraseña"
                />
            </div>
            <div className="containerLock">
                <img src={Lock} className="iconLock"/>
            </div>
            </form>
        </>
     );
}

export default FormNewPass;