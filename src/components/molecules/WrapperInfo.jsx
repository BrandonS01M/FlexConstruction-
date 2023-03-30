import Img3 from "../../assets/img/img3.svg"
import Title from "../atoms/Title";
import '../../assets/styled/Landing.css'


function Wrapperinfo( {id}) {
    return (  
        <>
            <main className="sectionInfo" id={id}>
                <div className="containerInf">
                    <img src={Img3} id="imgInfo" className="imgInf"/>
                </div>
                <div className="containerInf2" id="containerInfo2">
                    <Title
                    propsInfo
                    msn="Planifica tus ideas
                    y llevalas a tu hogar"/>
                </div>
            </main>
        </>
    );
}

export default Wrapperinfo;