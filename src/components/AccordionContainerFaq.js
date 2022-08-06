import AccordionContainer from './AccordionContainer';
import faq from '../images/faq.jpg';

const AccordionContainerFaq = () =>{
    return(
        <>
        <div className='faq'>
            <section className='faq__conteiner'>
            <h1 className='faq__title'>¿Cómo podemos ayudarte?</h1>
            <h4>Aquí algunas preguntas frecuentes que podrían ayudarte.</h4>
            </section>

            <section className='faq__containerImg'>
            <img src={faq} className='faq__img'/>
            </section>

        </div>
        <AccordionContainer></AccordionContainer>
      </>
    );
}

export default AccordionContainerFaq;