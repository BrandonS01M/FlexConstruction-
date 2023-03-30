import Title from '../atoms/Title';
import Text from '../atoms/Text';
import '../../assets/styled/WrapperExecutive.css';
function WrapperExecutive({id}) {
    return ( 
        <>
            <main className="containerCardsExe" id={id}>
                <div className="containerExe">
                    <div className="imgExe1">
                    </div>
                    <Title
                    propsExe
                    msn="UI/UX & Front-End"/>
                    <Text
                    propsExe
                    msn="Brandon Sanchez Martinez, Estudiante de la Universidad Politecnica de Chiapas."/>
                </div>
                <div className="containerExe">
                    <div className="imgExe2">
                    </div>
                    <Title
                    propsExe
                    msn="Front-End & Analista"/>
                    <Text
                    propsExe
                    msn="David Antonio Gomez Gonzalez, Estudiante de la Universidad Politecnica de Chiapas."/>

                </div>
                <div className="containerExe">
                    <div className="imgExe3">
                    </div>
                    <Title
                    propsExe
                    msn="Ing Requerimientos & Back-End"/>
                    <Text
                    propsExe
                    msn="Cesar Josue martinez Castillejos, Estudiante de la Universidad Politecnica de Chiapas."/>
                </div>
            </main>
        </>
     );
}

export default WrapperExecutive;