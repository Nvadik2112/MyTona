import React from 'react'
import classes from './Category.css'
import CategoryNavList from '../../components/CategoryNavList/CategoryNavList'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'

const Category = props => {
    const cls = [classes.category];
    props.title === 'Последние новости' ? cls.push(classes.category__background_white) :
        cls.push(classes.category__background_grey)

    return (
        <section className={cls.join(' ')}>
            <h1 className={classes.category__title}>{props.title}</h1>
            <CategoryNavList navlist={props.navlist} />
            <hr className={classes.category__hider} />
            <CategoryMenu menu={props.menu} />
            <div className={classes.category__link}>
                <a href={props.link.url}>
                    {props.link.title}
                </a>
            </div>
        </section>
    )
}

export default Category;