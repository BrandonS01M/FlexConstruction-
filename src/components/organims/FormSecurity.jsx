import WrapperInput from "../molecules/WrapperInput";
import Buttons from "../atoms/Buttons";
import Text from "../atoms/Text";
import '../../assets/styled/FormSecurity.css';

function FormSecurity() {
    return (
        <>
        <main className="securityForm">
            <form className="formSegurity">
                <WrapperInput type="email" idI="user" idL="user" msn="Correo Electronico"/>
                <WrapperInput type="password" idI="password" idL="password" msn="Contraseña"/>

                <div className="textInformations">
                    <Text propsTexL2 msn="Toda tu informacion es confidencial, aqui podras “modificar” tu seguridad para tu cuenta y estar mejor protegido."/>
                </div>
            </form>

            <div className="containerBtnsAS">
                    <Buttons propsEdit msn="Editar"/>
                    <Buttons propsBack msn="Volver"/>
            </div>

        </main>
        </>
    );
}

export default FormSecurity;