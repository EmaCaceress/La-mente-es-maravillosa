import { Cards } from "../utils/Cards.js";
import CardOutstanding from "./CardOutstanding.js";

const CardListContainer = () =>{
    return(
        <section className='article__outstanding center'>
        <h1>Destacados</h1>
        <hr className="slash-3--blue"/>
        {
            Cards.map(element => 
            <CardOutstanding 
                title={element.title} 
                subtitle={element.subtitle} 
                description={element.description} 
                img={element.img}
            />)
        }
      </section>

    )
}

export default CardListContainer;