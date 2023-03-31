import WrapperHeadTy3 from "../components/molecules/WrapperHeadTy3";
import FormNewPass from "../components/organims/FormNewPass";
import '../assets/styled/ChangePassNew.css'



function ChangePassNew() {
    return ( 
        <main className="changePassNew">
            <WrapperHeadTy3 to="/login"/>
            <FormNewPass/>
        </main>
     );
}

export default ChangePassNew;