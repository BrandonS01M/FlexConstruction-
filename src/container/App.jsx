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
            </Routes>
        </BrowserRouter>
    );
}

export default App;