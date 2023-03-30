import ButtonEdit from "../atoms/ButtonEdit";
import Buttons from "../atoms/Buttons";
import WrapperPerfil from "../molecules/WrapperPerfil";
import '../../assets/styled/EditDataPerfil.css'


function EditDataPerfil({msn, className}) {
    return (
            <main className="">
                <div className="dataPerfil">
                    <div className="wrapperPer">       
                        <WrapperPerfil msnTitleM="Nombre completo" msnSubTitleM="Brandon Sanchez Martinez"/>
                        <WrapperPerfil msnTitleM="Usuario" msnSubTitleM="brandon123"/>
                        <WrapperPerfil msnTitleM="Correo" msnSubTitleM="brandonsma@gmail.com"/>
                        <WrapperPerfil msnTitleM="Telefono" msnSubTitleM="2321-423-123-43"/>
                        <WrapperPerfil msnTitleM="Fecha de Nacimiento" msnSubTitleM="32/98/2313"/>
                    </div>
                    <div className="containerBtnEdit">
                        <ButtonEdit/>
                        <ButtonEdit/>
                        <ButtonEdit/>
                        <ButtonEdit/>
                        <ButtonEdit/>
                    </div>
                </div>
                <div className="containerBtns">
                    <Buttons msn="Cancelar" propsCanceled className="btnCanceled"/>
                    <Buttons msn="Guardar" propsBtnSave className="btnSave"/>
                </div>
            </main>
        
      );
}

export default EditDataPerfil;