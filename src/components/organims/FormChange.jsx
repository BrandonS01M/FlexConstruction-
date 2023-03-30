import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Buttons from "../atoms/Buttons";

function FomrChange() {
    return ( 
        <>
            <form className="ChangePass-Form">
                <Title
                propsT
                msn="Cambio de Contraseña"/>
                <WrapperInput type="text" idI="user" idL="user" msn="Usuario"/>
                <WrapperInput type="number" idI="password" idL="password" msn="Numero de Telefono"/>
                <WrapperInput type="text" idI="password" idL="password" msn="Pregunta"/>
            <div className="">
                <Buttons 
                    propsBtnSend
                    msn="Verificar"
                />
                <Buttons 
                    propsBtnSend
                    msn="Cacelar"
                />
            </div>
            </form>
        </>
     );
}

export default FomrChange;