import React from 'react'
import classes from './HeaderNavItem.css'

const HeaderNavItem = props => {

    const cls = [classes.header__nav_item];
    props.list.id === 0?cls.push(classes.blue):      
            cls.push(classes.black)
         
    
        return (
            <li>
                <a className={cls.join(' ')} href={props.list.url}>
                    {props.list.text}
                </a>
            </li>
        )
    }
  

export default HeaderNavItem;