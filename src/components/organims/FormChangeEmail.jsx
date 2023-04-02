import WrapperInput from "../molecules/WrapperInput";
import Buttons from "../atoms/Buttons";
import '../../assets/styled/ChangeEmail.css';

function FormChangeEmail() {
    return ( 
        <>
            <form className="changeEmailForm">
                <WrapperInput type="email" idI="user" idL="user" msn="Nuevo Correo"/>
                <WrapperInput type="email" idI="password" idL="password" msn="Confirmar Correo"/>

                <div className="containerBtnEdit">
                    <Buttons propsCanceled msn="Cancelar"/>
                    <Buttons propsBtnSave msn="Guardar"/>
                </div>
            </form>

        </>
     );
}

export default FormChangeEmail;