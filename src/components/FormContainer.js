import Form from "./Form";
import contactanos from "../images/contactanos.jpg";

const FormContainer = () =>{
    return(
        <main className='contact'>
        <section className='contact__containerImg'>
        <h1 className='contact__title'>Envianos tú consulta</h1>
          <img src={contactanos} className='contact__img'/>
        </section>
        <Form></Form>
      </main>
    )
}

export default FormContainer;