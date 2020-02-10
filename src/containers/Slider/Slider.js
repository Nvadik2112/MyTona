import React, { Component } from 'react'
import classes from './Slider.css'
import cooking from '../../img/cooking_background.jpg'
import raven from '../../img/raven_background.jpg'
import list from '../../img/list_background.jpg'
import manastorm from '../../img/manastorm_background.jpg'
import riddleside from '../../img/riddleside_background.jpg'
import titlecooking from '../../img/cooking_title.png'
import titleraven from '../../img/raven_title.png'
import titlelist from '../../img/list_title.png'
import titlemanastor from '../../img/manastorm_title.png'
import titleriddleside from '../../img/riddleside_title.png'
import SliderBar from '../../components/SliderBar/SliderBar'

class Slider extends Component {
    state = {
        currentslide: 0,
        image: [
            { id: 0, backgroundUrl: cooking, titleUrl: titlecooking },
            { id: 1, backgroundUrl: raven, titleUrl: titleraven },
            { id: 2, backgroundUrl: list, titleUrl: titlelist },
            { id: 3, backgroundUrl: manastorm, titleUrl: titlemanastor },
            { id: 4, backgroundUrl: riddleside, titleUrl: titleriddleside }
        ]
    }

    prevSlider = () => {
        if (this.state.currentslide === 0)
            return (
                this.setState({
                    currentslide: 4
                })
            )
        else if (this.state.currentslide > 0 || this.state.currentslide < 4)
            return (
                this.setState({
                    currentslide: this.state.currentslide - 1
                })
            )
    }

    nextSlider = () => {
        if (this.state.currentslide < 4)
            return (
                this.setState({
                    currentslide: this.state.currentslide + 1
                })
            )
        else
            return (
                this.setState({
                    currentslide: 0
                })
            )
    }

    timer = setInterval(this.nextSlider, 7000);

    
    render() {
        const ClsSliderNavLeft = [classes.slider__nav],
            ClsSliderNavRight = [classes.slider__nav],
            ClsSliderArrowLeft = [classes.slider__arrow],
            ClsSliderArrowRight = [classes.slider__arrow];
        ClsSliderNavLeft.push(classes.slider__nav_left)
        ClsSliderNavRight.push(classes.slider__nav_right)
        ClsSliderArrowLeft.push(classes.slider__left)
        ClsSliderArrowRight.push(classes.slider__right)

        return (
            <section>
                <div className={classes.slider}>
                    <div className={classes.slider__list}>
                        <img className={classes.slider__background} src={this.state.image[this.state.currentslide].backgroundUrl} alt="" />
                        <img className={classes.slider__logo} src={this.state.image[this.state.currentslide].titleUrl} alt="" />
                    </div>
                    <div className={ClsSliderNavLeft.join(' ')} onClick={this.prevSlider}>
                        <span className={ClsSliderArrowLeft.join(' ')} />
                    </div>
                    <div className={ClsSliderNavRight.join(' ')} onClick={this.nextSlider}>
                        <span className={ClsSliderArrowRight.join(' ')} />
                    </div>
                </div>
                <SliderBar image={this.state.image} />
            </section >
        )
    }
}

export default Slider

