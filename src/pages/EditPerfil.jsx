import WrapperHeadTy2 from "../components/molecules/WrapperHeadTy2";
import WrapperPhoto from "../components/molecules/WrapperPhoto";
import WrapperTexture from "../components/molecules/WrapperTexture";
import EditDataPerfil from "../components/organims/EditDataPerfil";
import Title from "../components/atoms/Title";
import '../assets/styled/EditDataPerfil.css';

function EditPerfil() {
    return ( 
        <>

            <WrapperHeadTy2 msnT="Editar Perfil"/>
            <Title 
            propsTitleVist
            className="titleEdit"
            msn="Editar Perfil"/>
            <WrapperTexture/>
            <WrapperPhoto/>

            <EditDataPerfil/>

        </>
     );
}

export default EditPerfil;