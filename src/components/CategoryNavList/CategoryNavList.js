import React  from 'react'
import classes from './CategoryNavList.css'
import CategoryNavItem from './CategoryNavItem/CategoryNavItem'

const CategoryNavList = props => (
    <ul className={classes.category__nav_list}>
        {props.navlist.map((list, index) => {
            return (
                <CategoryNavItem
                    key={index}
                    list={list}
                />
            )
        })}
    </ul>
    
)

export default CategoryNavList;