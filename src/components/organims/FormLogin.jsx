import { Link } from "react-router-dom";
import WrapperInput from "../molecules/WrapperInput";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Buttons from "../atoms/Buttons";
import "../../assets/styled/FormLogin.css";


function FormLogin() {
    return (
        <form className="Login-form">
            <Title msn="Bienvenido" propsT/>
            <WrapperInput type="text" idI="user" idL="user" msn="Nombre de Usuario:"/>
            <WrapperInput type="password" idI="password" idL="password" msn="Contraseña:"/>
            <Text className="text-input" msn="¿Olvidaste tu contraseña?"/>
            
            <div className="linkRedirChange">
                <Link className="redirChange" to="/changepass" id="redirPass">Quieres cambiar tu contraseña?</Link>
            </div>

            <div className="btnSenCont">
                <Buttons 
                    propsBtnSend
                    msn="Enviar"/>
            </div>

            <div className="linkRedir">
                <Link className="redirAccount" to="/register">No tienes una cuenta? <span>Registrate</span></Link>
            </div>

        </form>
    );
}

export default FormLogin;