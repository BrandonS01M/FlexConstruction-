import FormEditProyect from "../components/organims/FormEditProyect";
import Header from "../components/organims/Header";
import Circle from "../components/atoms/Circle";
import "../assets/styled/EditProyect.css"

function EditProyect() {
    return (
        <>
            <div className="create-proyect">
                <Header/>
                <FormEditProyect/>
            </div>
            <div className="container-textur">
                <Circle/>
            </div>
        </>
    );
}

export default EditProyect;