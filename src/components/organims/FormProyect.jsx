import WrapperAccordion from "../molecules/WrapperAccordion";
import Title from "../atoms/Title"
import "../../assets/styled/FormProyect.css"

function FormProyect() {
    return (
        <form className="Proyect-form">
            <Title msn="Crea tu proyecto" propsT/>
            <WrapperAccordion msn="item #1" placeholderone="pregunta 1" placeholdertwo="pregunta 2" placeholderthree="pregunta 3" placeholderfour="pregunta 4" data="Terminar" props propsB/>
            <WrapperAccordion msn="item #2" placeholderone="pregunta 5" placeholdertwo="pregunta 6" placeholderthree="pregunta 7" placeholderfour="pregunta 8" data="Terminar" props propsB/>
            <WrapperAccordion msn="item #3" placeholderone="pregunta 9" placeholdertwo="pregunta 10" placeholderthree="pregunta 11" placeholderfour="pregunta 12" data="Terminar" props propsB/>
        </form>
    );
}

export default FormProyect;
