import FormWork from "../components/organims/FormWork";
import HeaderD from "../components/organims/HeaderD";
import Circle from "../components/atoms/Circle";
import "../assets/styled/CreateProyect.css"

function CreateWork() {
    return (
        <>
            <div className="create-proyect">
                <HeaderD/>
                <FormWork/>
            </div>
            <div className="container-textur">
                <Circle/>
            </div>
        </>
    );
}

export default CreateWork;