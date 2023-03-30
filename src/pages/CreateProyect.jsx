import FormProyect from "../components/organims/FormProyect";
import Header from "../components/organims/Header";
import Circle from "../components/atoms/Circle";
import "../assets/styled/CreateProyect.css"

function CreateProyect() {
    return (
        <>
            <div className="create-proyect">
                <Header/>
                <FormProyect/>
            </div>
            <div className="container-textur">
                <Circle/>
            </div>
        </>
    );
}

export default CreateProyect;