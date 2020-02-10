import React from 'react'
import classes from './SliderBar.css'
import SliderBarItem from './SliderBarItem/SliderBarItem'

const SliderBar = props => (
    <div className={classes.slider_bar}>
    {props.image.map((img, index) => {
            return (
                <SliderBarItem sliderBar={props.sliderBar}
                    currentslide={props.currentslide}
                    key={index}
                    img={img}
                />
            )
        })}
        
    </div>
)

export default SliderBar;