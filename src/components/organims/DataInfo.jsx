import WrapperDataInfo from "../molecules/WrapperDataInfo";
import '../../assets/styled/DataInfo.css';
function DataInfo() {
    return ( 
        <>
            <main className="dataPrinci">
                <div className="containerData">
                    <div className="texts">
                        <WrapperDataInfo msnTitleM="Nombre Completo" msnSubTitleM="Ejemplo"/>
                        <WrapperDataInfo msnTitleM="Usuario" msnSubTitleM="Ejemplo"/>
                        <WrapperDataInfo msnTitleM="Correo" msnSubTitleM="Ejemplo"/>
                        <WrapperDataInfo msnTitleM="Telefono" msnSubTitleM="Ejemplo"/>
                        <WrapperDataInfo msnTitleM="Fecha de Nacimiento" msnSubTitleM="Ejemplo"/>
                    </div>
                </div>
            </main>

        </>
     );
}

export default DataInfo;