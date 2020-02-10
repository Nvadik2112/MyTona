import React from 'react'
import classes from './FooterList.css'
import FooterListItem from './FooterListItem/FooterListItem'

const FooterList = props => (
    <ul className={classes.footer__list}>
        {props.navlist.map((list, index) => {
            return (
                <FooterListItem
                    key={index}
                    list={list}
                />
            )
        })}
    </ul>
)

export default FooterList;