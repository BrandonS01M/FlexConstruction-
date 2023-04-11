import FormEditWork from "../components/organims/FormEditWork";
import HeaderD from "../components/organims/HeaderD";
import Circle from "../components/atoms/Circle";
import "../assets/styled/EditProyect.css"

function EditWork() {
    return (
        <>
            <div className="create-proyect">
                <HeaderD/>
                <FormEditWork/>
            </div>
            <div className="container-texture">
                <Circle/>
            </div>
        </>
    );
}

export default EditWork;