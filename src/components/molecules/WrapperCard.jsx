import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Icon1 from "../../assets/img/icon17.svg";
import Icon2 from "../../assets/img/icon18.svg";
import Icon3 from "../../assets/img/icon19.svg";
import '../../assets/styled/WrapperCard.css'

function WrapperCard({id}) {
    return ( 
        <>
            <div className="containerCards" id={id}>
                <div className="cardsTy">
                    <img src={Icon1} id="icon1"/>
                    <Title
                    msn="Medidas" propsCards/>
                    <Text
                    propsTexL
                    msn="Las medidas proporcionadas nos 
                    seran de ayuda para poder asi calcular el terreno y 
                    poder medir en las zona y tener una buena construccion."/>
                    
                </div>
                <div className="cardsTy">
                <img src={Icon2} id="icon1"/>
                    <Title
                    msn="Graficas" propsCards/>
                    <Text
                    propsTexL
                    msn="Les brindaremos unas graficas en las cuales podra
                     visualizar las estadisticas las cuales estaran  calculadas
                     de acuerdo a los datos reunidos."/>
                </div>
                <div className="cardsTy">
                <img src={Icon3} id="icon1"/>
                    <Title
                    msn="Formularios" propsCards/>
                    <Text
                    propsTexL
                    msn="La realización de formularios nos ayudara, para asi 
                    poder una mejor organizacion de los datos."/>
                </div>
            </div>
        </>
     );
}

export default WrapperCard;