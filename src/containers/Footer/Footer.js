import React, { Component } from 'react'
import classes from './Footer.css'
import logo from '../../img/logo.svg'
import FooterList from '../../components/FooterList/FooterList'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

class Footer extends Component {
    state = {
        sociallist: [
            {src: "https://img.icons8.com/color/48/000000/twitter-circled.png", url: "https://twitter.com/mytona_official"},
            {src: "https://img.icons8.com/color/48/000000/youtube-play.png", url: "https://www.youtube.com/channel/UCFdoOYWqDIKXT4MVhC69OUg/featured"},
            {src: "https://img.icons8.com/color/48/000000/facebook-circled.png", url: "https://www.facebook.com/mytona.official"},
            {src: "https://img.icons8.com/color/48/000000/instagram-new.png", url: "https://www.instagram.com/mytona"},    
        ], 

        gamelist: {
            title: 'Сайты игр',
            links: [
                { url: 'https://seekersnotes.com/', text: "Seekers Notes: Hidden Mystery" },
                { url: 'https://cookingdiary.game/', text: 'Cooking Diary: Tasty Hills' }
            ]
        },

        contactlist: {
            title: 'Контакты',
            links: [
                { url: 'mailto:info@mytona.com', text: "info@mytona.com" },
                { url: 'mailto:support@mytona.com', text: 'support@mytona.com' }
            ]
        },

        politics: {
            links: [
                { url: 'https://mytona.ru/privacy-policy', text: "Политика конфиденциальности" },
                { url: 'https://mytona.ru/terms-of-service', text: 'Условия использования' },
                { url: 'https://mytona.ru/cookie-policy', text: 'Политика использования файлов cookie' },
                { url: 'https://mytona.ru/press-kit', text: 'Пресс-кит' }
            ],
            greylink:
                { url: 'https://mytona.ru/sout-results', text: 'Оценка условий труда' }
        }
    }

    render() {
        return (
            <footer>
                <div className={classes.footer}>
                    <div className={classes.footer__images}>
                        <img className={classes.footer__logo} src={logo} alt="" />
                        <SocialLinks sociallist={this.state.sociallist}/>
                    </div>
                    <div className={classes.footer__main}>
                        <div className={classes.footer__links}>
                            <h5 className={classes.footer__links_title}>{this.state.gamelist.title}</h5>
                            <FooterList navlist={this.state.gamelist.links} />
                        </div>
                        <div className={classes.footer__links}>
                            <h5 className={classes.footer__links_title}>{this.state.contactlist.title}</h5>
                            <FooterList navlist={this.state.contactlist.links} />
                        </div>

                    </div>
                    <div className={classes.footer__links_politics}>
                        <FooterList navlist={this.state.politics.links} />
                        <li className={classes.footer__graylink}>
                            <a href={this.state.politics.greylink.url}>{this.state.politics.greylink.text}</a>
                        </li>
                    </div>
                    <div className={classes.footer__copyright}>
                        <span>{'© 2018-2020 MyTona Pte. Ltd. All rights reserved'}</span>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer