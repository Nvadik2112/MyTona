import React from 'react'
import classes from './SocialLinks.css'
import SocialLinksItem from './SocialLinksItem/SocialLinksItem'

const SocialLinks = props => (
    <div className={classes.social__links}>
    {props.sociallist.map((img, index) => {
            return (
                <SocialLinksItem
                    key={index}
                    img={img}
                />
            )
        })}       
    </div>
)

export default SocialLinks;