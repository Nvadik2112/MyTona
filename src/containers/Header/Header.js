import React, { Component } from 'react'
import classes from './Header.css'
import logo from '../../img/logo.svg'
import HeaderNavList from '../../components/HeaderNavList/HeaderNavList'

class Header extends Component {
    state = {
        navlist: [
            { id: 0, text: 'главная', url: "https://mytona.ru/" },
            { id: 1, text: 'о компании', url: "https://mytona.ru/company" },
            { id: 2, text: 'карьера', url: "https://mytona.ru/career" },
            { id: 3, text: 'наши игры', url: "https://mytona.ru/games" },
            { id: 4, text: 'новости', url: "https://mytona.ru/articless" },
            { id: 5, text: 'техподдержка', url: "https://mytona.helpshift.com/a/seekers-notes-hidden-mystery/" },
        ]
    }

    render() {
        return (
            <header>
                <div className={classes.header__nav}>
                    <a className={classes.header__nav_logo} href={'/'}>
                        <img className={classes.header__logo} src={logo} alt="logo" />
                    </a>
                    <div className={classes.header__nav_links}>
                        <HeaderNavList navlist={this.state.navlist} />
                        <a className={classes.header__eng} href={"https://mytona.com"}>
                            ENG
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header

