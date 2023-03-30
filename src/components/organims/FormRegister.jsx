import WrapperInput from "../molecules/WrapperInput";
import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Buttons from "../atoms/Buttons";
import '../../assets/styled/Register.css'

function FormRegister() {
    return ( 
        <>
            <form className="Register-form">
                <Title msn="Registrate YA!" propsT/>
                    <div className="containerForm">
                        <WrapperInput type="text" idI="name" idL="name" msn="Nombre Completo"/>
                        <WrapperInput type="email" idI="emailU" idL="emailU" msn="Correo Electronico"/>
                        <WrapperInput type="text" idI="userR" idL="userR" msn="Correo Electronico"/>
                        <WrapperInput type="password" idI="password" idL="password" msn="Contraseña"/>
                        <WrapperInput type="number" idI="phone" idL="phone" msn="Num. Telefono"/>
                        <Text className="text-input" msn="¿Olvidaste tu contraseña?"/>
                    </div>
                    <div className="btnSendContainer">
                        <Buttons
                        propsBtnSend
                        msn="Enviar"/>
                    </div>
                    <div className="linkRedir">
                        <Link className="redirAccount" to="/login">Ya tienes Cuenta? <span>Inicia Sesion</span></Link>
                    </div>

            </form>
        </>
     );
}

export default FormRegister;