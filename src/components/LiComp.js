import {BsArrowRight} from "react-icons/bs";

const LiComp = ({title,subtitles}) =>{
    return(
        <>
            <h2>{title}</h2>
            <hr/>
            <ul>
                {
                    subtitles.map(element => <li className="aside__li"><h3 style={{display:'inline-block'}}>{element}</h3><BsArrowRight style={{fontSize:'7vw',color:'black'}}/></li>)
                }
            </ul>
            
        </>
    )
}

export default LiComp; 