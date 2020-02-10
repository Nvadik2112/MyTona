import React from 'react'
import classes from './CategoryMenu.css'
import CategoryMenuItem from '../../components/CategoryMenu/CategoryMenuItem/CategoryMenuItem'

const CategoryMenu = props => {
    return (
        <div className={classes.category__menu}>
    {props.menu.map((list, index) => {
            return (
                <CategoryMenuItem
                    key={index}
                    list={list}
                />
            )
        })}
        
    </div>
        )
    }
    export default CategoryMenu;