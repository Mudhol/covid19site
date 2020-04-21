import React from 'react';
import './Card.css'

const Card = ({Newsletter}) => {
    return (
        <div className='shadow Card'>
            <article className="bg-white center mw5 ba b--black-10 mv4">
  <div className="pv2 ph3">
     <h1 className="f6 ttu tracked">{Newsletter.source.name}</h1>
  </div>
  <img src={Newsletter.urlToImage} className="w-100 db" alt="" />
  <div className="pa3">
    <a href={Newsletter.url} className="link dim lh-title">{Newsletter.title}</a>
  </div>
    </article>  
    
        </div>
        
    )
}

export default Card;