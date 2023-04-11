import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Works from "../pages/Works";
import CreateProyect from "../pages/CreateProyect";
import EditProyect from "../pages/EditProyect";
import Perfil from "../pages/Perfil";
import Editperfil from "../pages/EditPerfil";
import Pay from "../pages/Pay";
import ChangePass from "../pages/ChangePass";
import ChangePassNew from "../pages/ChangePassNew";
import ChangeEmail from "../pages/ChangeEmail";
import PasswordChange from "../pages/PasswordChange";
import AccountSecurity from "../pages/AccountSecurity";
import Proyect from "../pages/Proyect";
import EditWorks from "../pages/EditWorks";
import EditWork from "../pages/EditWork";
import CreateWork from "../pages/CreateWork";
import Administration from "../pages/Administration";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/create_proyect" element={<CreateProyect/>}/>
                <Route path="/edit_proyect" element={<EditProyect/>}/>
                <Route path="/formpay" element={<Pay/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/editperfil" element={<Editperfil/>}/> 
                <Route path="/changepass" element={<ChangePass/>}/>
                <Route path="/changepass_new" element={<ChangePassNew/>}/>
                <Route path="/change_email" element={<ChangeEmail/>}/>
                <Route path="/password_change" element={<PasswordChange/>}/>
                <Route path="/account_security" element={<AccountSecurity/>}/>
                <Route path="/proyect" element={<Proyect/>}/>
                <Route path="/edit_work" element={<EditWork/>}/> 
                <Route path="/create_work" element={<CreateWork/>}/>
                <Route path="/edit_works" element={<EditWorks/>}/>
                <Route path="/administration" element={<Administration/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;