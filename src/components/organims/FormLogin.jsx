import { Link } from "react-router-dom";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import WrapperInput from "../molecules/WrapperInput";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Buttons from "../atoms/Buttons";
import "../../assets/styled/FormLogin.css";


function FormLogin() {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = "http://52.200.193.105/register/getAll";
  
    const handlerClick = (e) => {
      e.preventDefault();
      const newForm = new FormData(Form.current);
      if(newForm.get("user") === "" || newForm.get("password") === ""){
        alert("campos vacios");
      }else{
        
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: newForm.get("user"),
            password: newForm.get("password"),
        }),
      };
  
        fetch(endPoint, options)
          .then((response) => response.json())
    
          .then((data) => {
            if(data.status === true){
              navigate("/home");
            }else{
              alert("Datos incorrectos")
            }
          });
      }
    };

    return (
        <form className="Login-form" ref={Form}>
            <Title msn="Bienvenido" propsT/>
            <WrapperInput type="text" msn="Nombre de Usuario:" name="user"/>
            <WrapperInput type="password"  msn="Contraseña:" name="password"/>
            <Text className="text-input" msn="¿Olvidaste tu contraseña?"/>
            
            <div className="linkRedirChange">
                <Link className="redirChange" to="/changepass" id="redirPass">Quieres cambiar tu contraseña?</Link>
            </div>

            <div className="btnSenCont">
                <Buttons 
                    onClick={handlerClick}
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