import index__img from '../images/indeximg.jpg';
import ListCarrouselContainer from './ListCarrouselContainer';
import CardListContainer from './CardListContainer';

const IndexComp = () =>{
    
    return(
        <>
            <main className='main'>
            <section className='main__containerImg'>
                <img src={index__img} className='main__img' alt="hola"/>
            </section>
            <section className='main__containerTitle center'>
                <h1 className='main__title'>Conoce nuestro profesionales con licencia</h1>
                <h2 className='main__description'>Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?</h2>
            </section>
            </main>
            <article className='article'>
            <ListCarrouselContainer/>
            <CardListContainer/>
            </article>
        </>
    )
}

export default IndexComp;