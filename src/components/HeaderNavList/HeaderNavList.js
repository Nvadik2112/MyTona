import React  from 'react'
import classes from './HeaderNavList.css'
import HeaderNavItem from './HeaderNavItem/HeaderNavItem'

const HeaderNavList = props => (
    <ul className={classes.header__nav_list}>
        {props.navlist.map((list, index) => {
            return (
                <HeaderNavItem
                    key={index}
                    list={list}
                />
            )
        })}

    </ul>
)

export default HeaderNavList;