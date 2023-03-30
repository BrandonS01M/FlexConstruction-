import Inputs from '../atoms/inputs';
import Title from '../atoms/Title';
import Buttons from '../atoms/Buttons';
import Icon6 from '../../assets/img/Icon6.svg'
import '../../assets/styled/Pay.css'


function FormPay() {
    return ( 
        <>
            <form className="pay_Form">
                <div className="btnClose">
                    <Buttons
                    src={Icon6} propsBtnClose/>
                </div>
                <div className="titlePay">
                <Title
                msn="Pago" propsTitleType2/>
                </div>
                
                    <main className="containerFormPay">
                        <div className="containerInputs">
                            <Inputs placeholder="Numero de tarjeta"/>
                        </div>
                        <div className="containerInputs2">
                            <Inputs 
                            propsInputType2
                            placeholder="MM/AA"/>
                            <Inputs 
                            propsInputType2
                            placeholder="CVV"/>

                        </div>
                        <div className="containerInputs3">
                            <Inputs 
                            propsInputType2
                            placeholder="Nombre"/>
                            <Inputs 
                            propsInputType2
                            placeholder="Apellido"/>

                        </div>
                        <div className="containerInputs4">
                            <Inputs placeholder="Correo Electronico"/>
                        </div>

                        <div className=""></div>
                        <div className="">
                            <Buttons
                            propsBtnPay
                            msn="Pagar"/>
                        </div>
                    </main>
            </form>
        </>
     );
}

export default FormPay;