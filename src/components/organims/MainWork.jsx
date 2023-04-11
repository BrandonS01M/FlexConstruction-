import styled from "styled-components";
import { GraphicLot } from "../molecules/GraphicLot";
import { GraphicPrice } from "../molecules/GraphicPrice";
import { GraphicTopography } from "../molecules/GraphicTopography";
import { GraphicBudget } from "../molecules/GraphicTotal";
import WrapperAcordionTex from "../molecules/WrapperAcordionTex";
import SubTitleD from "../atoms/SubTitleD";
import TextD from "../atoms/TextD";
import SummaryD from "../atoms/SummaryD";

const StyledMW = styled.main`
    @media screen and (min-width: 600px){
        height: 70vh; 
    }
    .content-Labor{
        margin: 2% 0;
        width: 100%;
        background-color: azure;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(4px);
    }
    details{
        margin: 0 15% 0 15%;
        width: 70%;
        border-radius: 6px;
        cursor: pointer;
    }
    summary{
        align-items: none;
    }
    .group-Labor{
        margin: 0 1% 0 1%;
        background-color: rgba(16, 24, 32, 0.874);
        border-radius: 0 0 15px 15px;
        text-align: center;
    }
    .content-Graphic{
        width: 100%;
        margin: 0 0 4% 0;
        background-color: azure;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(4px);
    }
    .content-Topography{
        width: 100%;
        margin: 0 0 4% 0;
        background-color: azure;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(4px);
    }
    .content-total{
        width: 100%;
        background-color: azure;
        text-align: center;
    }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {
        .content-Labor{
        margin: 2% 0;
        width: 100%;
        background-color: azure;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(4px);
        }
        details{
            margin: 0 15% 0 15%;
            width: 70%;
            border-radius: 6px;
            cursor: pointer;
        }
        summary{
            align-items: none;
        }
        .group-Labor{
            margin: 0 1% 0 1%;
            background-color: rgba(16, 24, 32, 0.874);
            border-radius: 0 0 15px 15px;
            text-align: center;
        }
        .content-Graphic{
            display: flex;
            flex-direction: row;
            width: 100%;
            margin: 0 0 4% 0;
            background-color: azure;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(4px);
        }
        .content-group-one{
            width: 30%;
            margin: 0 0 0 5%;
        }
        .content-group-two{
            width: 30%;
        }
        .content-group-three{
            width: 30%;
            margin: 0 5% 0 0;
        }
        .content-Topography{
            width: 100%;
            margin: 0 0 4% 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            background-color: azure;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 8px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(4px);
        }
        .topography-group-one{
            width: 50%;
        }
        .topography-group-two{
            width: 50%;
            border-left: 2px solid #FF7F32;
        }
        .constent-group-accordion{
            margin: 20% 0;
        }
        .content-total{
            width: 100%;
            background-color: azure;
            text-align: center;
        }
    }
    
`;

function MainWork() {
    return (
        <StyledMW>  
            <div className="content-Labor">
                <details>
                    <SummaryD msn={"Roles y Cantidad de Personal"} one_prop/>
                    <div className="group-Labor">
                        <TextD msn={"cuidador(a): "} txt={"3"}/>
                    </div>
                </details>
            </div>
            <div className="content-Graphic">
                <div className="content-group-one">
                    <GraphicLot/>
                </div>
                <div className="content-group-two">
                    <GraphicPrice/>
                </div>
                <div className="content-group-three">
                    <GraphicBudget/>
                </div>
            </div>
            <div className="content-Topography">
                <div className="topography-group-one">
                    <GraphicTopography/>
                </div>
                <div className="topography-group-two">
                    <div className="constent-group-accordion">
                        <WrapperAcordionTex title={"Topografia Plana"} txt={"Aproximadamente el 30% de los terrenos pueden tener una topografía plana, lo cual los hace relativamente fáciles y económicos de construir, ya que no requieren de grandes movimientos de tierra ni de nivelaciones complejas."}/>
                        <WrapperAcordionTex title={"Topografia Inclinada"} txt={"Alrededor del 40% de los terrenos pueden tener pendientes pronunciadas o moderadas, lo cual representa una proporción significativa. La construcción en terrenos inclinados puede requerir de trabajos de nivelación, terrazas, muros de contención u otras técnicas para adecuar el terreno a la construcción de una ca"}/>
                        <WrapperAcordionTex title={"Topografia Irregular"} txt={"Cerca del 10% de los terrenos pueden tener topografía irregular, como colinas, lomas, barrancos o cuevas. Este tipo de terrenos puede presentar desafíos adicionales y requerir técnicas de construcción especiales, lo cual puede aumentar los costos y la complejidad del proyecto."}/>
                        <WrapperAcordionTex title={"Topografia Costera"} txt={"Aproximadamente el 5% de los terrenos pueden estar ubicados cerca de la costa, lo cual puede implicar desafíos específicos relacionados con la erosión, las inundaciones y las regulaciones locales de construcción en áreas costeras."}/>
                        <WrapperAcordionTex title={"Topografia Boscosa"} txt={"Alrededor del 15% de los terrenos pueden estar cubiertos por vegetación densa o bosques, lo cual puede requerir la limpieza o tala de árboles para la construcción de una casa, así como cumplir con regulaciones ambientales y proteger el ecosistema local."}/>
                        <WrapperAcordionTex title={"Topografia Urbana"} txt={"Cerca del 10% de los terrenos pueden estar ubicados en áreas urbanas densamente pobladas, lo cual puede implicar consideraciones especiales, como cumplir con regulaciones de construcción locales, coordinación con servicios públicos existentes y adaptación a un entorno urbano."}/>
                    </div>
                </div>
            </div>
            <div className="content-total">
                <SubTitleD msn={"Presupuesto Total Estimado:"}/>
                <TextD msn={"4,430"} three_prop/>
            </div>
        </StyledMW>
    );
}

export default MainWork;