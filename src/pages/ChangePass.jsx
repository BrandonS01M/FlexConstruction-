import WrapperHeadTy3 from "../components/molecules/WrapperHeadTy3";
import FormChange from "../components/organims/FormChange";
import '../assets/styled/Wrappers/WrapperHeadTy3.css';

function ChangePass() {
    return (
        <main className="changePass">
            <WrapperHeadTy3 to="/login"/>
            <FormChange/>
        </main>
      );
}

export default ChangePass;