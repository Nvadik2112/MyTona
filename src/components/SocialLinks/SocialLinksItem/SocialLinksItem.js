import React from 'react'
import classes from './SocialLinksItem.css'

const SocialLinksItem = props => {

return (
        <a href={props.img.url}>
           <img className={classes.social__links__item}  src={props.img.src} alt=""/>
        </a>
    )
}


export default SocialLinksItem;