
const ListCarrousel = ({comments}) =>{
    return(
        <div className="article__list">
            {
                comments.map((element, i) =>
                <div className="article__comments">
                    <h2 className="article__comment">{element.comment}</h2>
                    <h1 className="article__name">{element.name}</h1>
                </div>)
            }
        </div>
    )
}

export default ListCarrousel;