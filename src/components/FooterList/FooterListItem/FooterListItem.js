import React from 'react'
import classes from './FooterListItem.css'

const FooterListItem = props => {

    // const cls = [classes.category__nav_item];
    // props.list.id === 0?cls.push(classes.category__blue):      
    //         cls.push(classes.category__black)
         
    
        return (
            <li className={classes.footer__list_item}>
                <a href={props.list.url}>
                    {props.list.text}
                </a>
            </li>  )
    }
  

export default FooterListItem;