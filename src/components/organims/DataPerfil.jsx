import WrapperPerfil from "../molecules/WrapperPerfil";
import '../../assets/styled/DataPerfil.css'
function DataPerfil() {
    return ( 
        <>
            <main className="dataPerfil">
                <div className="wrapperPer">       
                    <WrapperPerfil msnTitleM="Nombre completo" msnSubTitleM="Brandon Sanchez Martinez"/>
                    <WrapperPerfil msnTitleM="Usuario" msnSubTitleM="brandon123"/>
                    <WrapperPerfil msnTitleM="Correo" msnSubTitleM="brandonsma@gmail.com"/>
                    <WrapperPerfil msnTitleM="Telefono" msnSubTitleM="2321-423-123-43"/>
                    <WrapperPerfil msnTitleM="Fecha de Nacimiento" msnSubTitleM="32/98/2313"/>
                </div>
            </main>
        </>
     );
}

export default DataPerfil;