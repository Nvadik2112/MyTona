import React from 'react'
import classes from './CategoryMenuItem.css'

const CategoryMenuItem = props => {

    // const cls = [classes.category__nav_item];
    // props.list.id === 0?cls.push(classes.category__blue):      
    //         cls.push(classes.category__black)
         
    
        return (
            <div className={classes.category__menu_item}>
                <h2 className={classes.category__menu_item_title}>
                    {props.list.title}
                </h2>
                <p>
                    {props.list.text}
                </p>
            </div>  )
    }
  

export default CategoryMenuItem;