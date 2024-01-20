import './index.css'

const CardItem =(props)=>{
    const {cardsList}=props;
    const {key,title,description,imgUrl,className}= cardsList;
    return(
      <li className={`Technology-container li ${className}`}>
        <h1 className='Technology-title'>{title}</h1>
        <p className='Technology-para'>{description}</p>
        <div className='imag-con'>
           <div> <img className='Technology-img' src={imgUrl} alt={title}/></div>
        </div>
      </li>
    )
}

export default CardItem;