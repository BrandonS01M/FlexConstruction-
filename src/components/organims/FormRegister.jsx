import { Link } from "react-router-dom";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import WrapperInput from "../molecules/WrapperInput";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Buttons from "../atoms/Buttons";
import '../../assets/styled/Register.css'

function FormRegister() {

  const navigate = useNavigate();
  const Form = useRef();
  const endPoint = 'http://52.200.193.105/register/create'


  const handlerClick = (e) => {
      e.preventDefault();
      const newForm = new FormData(Form.current);
  
      if(newForm.get("name") === "" || newForm.get("email") === "" || newForm.get("user") === "" || newForm.get("telephone") === ""|| newForm.get("password") === ""|| newForm.get("confirm") === ""){//el simbolo de pesos despues se nombra la variable
          alert("campos vacios");
      }else{
          
      const options = {
  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: newForm.get("name"),
          email_address: newForm.get("email"),
          user: newForm.get("user"),
          telephone_number: newForm.get("telephone"),
          password: newForm.get("password"),
          confirm_password: newForm.get("confirm"),
        }),
      };

      fetch(endPoint, options)
        .then((response) => response.json())
        .then((data) => {
          if(data.status === true){
            navigate("/login");
            alert("Se agrego con exito")
          }  
        });
      }
    };

    return ( 
        <>
            <form className="Register-form" ref={Form}>
                <Title msn="Registrate YA!" propsT/>
                    <div className="containerForm">
                        <WrapperInput type="text" msn="Nombre Completo" name="name"/>
                        <WrapperInput type="email" msn="Correo Electronico" name="email"/>
                        <WrapperInput type="text" msn="Usuario" name="user"/>
                        <WrapperInput type="number" msn="Num. Telefono" name="telephone"/>
                        <WrapperInput type="password" msn="Contraseña" name="password"/>
                        <WrapperInput type={"password"} msn={"Confirme Contraseña"} name={"confirm"}/> 
                        <Text className="text-input" msn="¿Olvidaste tu contraseña?"/>
                    </div>
                    <div className="btnSendContainer">
                        <Buttons
                        onClick={handlerClick}
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