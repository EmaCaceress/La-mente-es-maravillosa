
const CardOutstanding = ({img, subtitle, title, description}) =>{
    return(
        <div className="cardOut">
            <div className="cardOut__containerImg"><img src={img} className="cardOut__img"/></div>
            <div className="cardOut__container">
                <h2 className="cardOut__subtitle">{subtitle}</h2>
                <h1 className="cardOut__title">{title}</h1>
                <h3 className="cardOut__description">{description}</h3>
            </div>
            <div className="cardOut__containerButton">
                <button className='cardOut__button'>Ver Mas</button>                
            </div>

        </div>
    )
}

export default CardOutstanding;