import Title from "../components/atoms/Title";
import HeadChangeEmail from "../components/organims/HeadChangeEmail";
import WrapperTexture from "../components/molecules/WrapperTexture";
import FormChangeEmail from "../components/organims/FormChangeEmail";
import WrapperTextureFoo from "../components/molecules/WrapperTextureFoo";
import WrapperPhoto from "../components/molecules/WrapperPhoto";
import '../assets/styled/ChangeEmail.css';

function ChangeEmail() {
    return ( 
        <>
            <main className="changeEmail">
                <HeadChangeEmail/>
                <Title 
                propsTitleVist
                className="titleEdit"
                msn="Cambiar Correo"/>
                <WrapperTexture/>
                <WrapperPhoto/>

                <FormChangeEmail/>

                <footer className="footerTexture">
                    <WrapperTextureFoo/>
                </footer>
            </main>
        </>
     );
}

export default ChangeEmail;