import WrapperPhoto from "../components/molecules/WrapperPhoto";
import WrapperTexture from "../components/molecules/WrapperTexture";
import EditDataPerfil from "../components/organims/EditDataPerfil";
import HeadEditPerfil from "../components/organims/HeadEditPerfil";
import Title from "../components/atoms/Title";
import '../assets/styled/EditDataPerfil.css';

function EditPerfil() {
    return ( 
        <>

            <HeadEditPerfil/>
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