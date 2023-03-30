import WrapperAccordion from "../molecules/WrapperAccordion";
import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle"
import IconEdit from "../../assets/img/Icon_4.svg"
import "../../assets/styled/FormEditProyect.css"

function FormEditProyect() {
    return (
        <form className="EditProyect-form">
            <Title msn="Edicion de proyecto" propsT/>
            <SubTitle msn="Nombre de proyecto" propsNP/>
            <WrapperAccordion msn="item #1" src={IconEdit} placeholderone="pregunta 1" placeholdertwo="pregunta 2" placeholderthree="pregunta 3" placeholderfour="pregunta 4" data="Terminar" props propsB propIcon/>
            <WrapperAccordion msn="item #2" src={IconEdit} placeholderone="pregunta 5" placeholdertwo="pregunta 6" placeholderthree="pregunta 7" placeholderfour="pregunta 8" data="Terminar" props propsB propIcon/>
            <WrapperAccordion msn="item #3" src={IconEdit} placeholderone="pregunta 9" placeholdertwo="pregunta 10" placeholderthree="pregunta 11" placeholderfour="pregunta 12" data="Terminar" props propsB propIcon/>
        </form>
    );
}

export default FormEditProyect;