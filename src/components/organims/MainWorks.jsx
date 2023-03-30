import WrapperTitle from "../molecules/WrapperTitle";
import WrapperWorks from "../molecules/WrapperWorks";

function MainWorks() {
    return (
        <div className="content-title">
            <WrapperTitle msnTitle="Tus Trabajos"/>
            <WrapperWorks/>
        </div>
    );
}

export default MainWorks;