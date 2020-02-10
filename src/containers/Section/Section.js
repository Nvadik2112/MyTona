import React, { Component } from 'react'
import classes from './Section.css'
import Category from '../../containers/Category/Category'



class Section extends Component {

    state = {
        news: {
                title: "Последние новости",
                link: { url: "https://mytona.ru/articles", title: 'ПЕРЕЙТИ К НОВОСТЯМ >'},
                navlist: [

                    { id: 0, text: 'Все категории', url: "/" },
                    { id: 1, text: 'Геймдев', url: "/" },
                    { id: 2, text: 'Сообщество', url: "/" },
                    { id: 3, text: 'Конференции', url: "/" },
                    { id: 4, text: 'Анонсы', url: "/" },
                    { id: 5, text: 'Обновления игр', url: "/" }
                ],

                menu: [
                    { id: 0, title: "Новости", text: 'Участие в производстве видео и статической рекламы для мобильных приложений и социальных сетей', url: "/" },
                    { id: 1, title: "Новости", text: 'Участие в производстве видео и статической рекламы для мобильных приложений и социальных сетей', url: "/" },
                    { id: 2, title: "Новости", text: 'Участие в производстве видео и статической рекламы для мобильных приложений и социальных сетей', url: "/" },
                    { id: 3, title: "Новости", text: 'Участие в производстве видео и статической рекламы для мобильных приложений и социальных сетей', url: "/" },
                    { id: 4, title: "Новости", text: 'Участие в производстве видео и статической рекламы для мобильных приложений и социальных сетей', url: "/" },
                    { id: 5, title: "Новости", text: 'Участие в производстве видео и статической рекламы для мобильных приложений и социальных сетей', url: "/" }
                ]
            }
        ,
        vacances: {
                title: "Все вакансии",
                link: {url: "https://mytona.ru/career", title: 'ПЕРЕЙТИ КО ВСЕМ ВАКАНСИЯМ >'}, 
                navlist: [
                    { id: 0, text: 'Якутск', url: "/" },
                    { id: 1, text: 'Санкт-Петербург', url: "/" },
                    { id: 2, text: 'Владивосток', url: "/" },
                    { id: 3, text: 'Иваново', url: "/" },
                    { id: 4, text: 'Удаленно', url: "/" }
                ],

                menu: [
                    { id: 0, title: "Вакансии", text: 'Разработка рекламных объявлений для продвижения наших игр.', url: "/" },
                    { id: 1, title: "Вакансии", text: 'Разработка рекламных объявлений для продвижения наших игр.', url: "/" },
                    { id: 2, title: "Вакансии", text: 'Разработка рекламных объявлений для продвижения наших игр.', url: "/" },
                    { id: 3, title: "Вакансии", text: 'Разработка рекламных объявлений для продвижения наших игр.', url: "/" },
                    { id: 4, title: "Вакансии", text: 'Разработка рекламных объявлений для продвижения наших игр.', url: "/" },
                    { id: 5, title: "Вакансии", text: 'Разработка рекламных объявлений для продвижения наших игр.', url: "/" },
                ]
            }
    }

    render() {
        return (
            <section>
            <Category title={this.state.news.title} navlist={this.state.news.navlist} menu={this.state.news.menu} link={this.state.news.link}/>
            <Category title={this.state.vacances.title} navlist={this.state.vacances.navlist} menu={this.state.vacances.menu} link={this.state.vacances.link}/>
            </section>
        )
    }
}
export default Section