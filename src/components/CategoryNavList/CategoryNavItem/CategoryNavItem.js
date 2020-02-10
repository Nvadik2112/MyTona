import React from 'react'
import classes from './CategoryNavItem.css'

const CategoryNavItem = props => {

    const cls = [classes.category__nav_item];
    props.list.id === 0?cls.push(classes.category__blue):      
            cls.push(classes.category__black)
         
    
        return (
            <li className={classes.nav}>
                <a className={cls.join(' ')} href={props.list.url}>
                    {props.list.text}
                </a>
            </li>  )
    }
  

export default CategoryNavItem;