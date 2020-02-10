import React from 'react'
import classes from './SliderBarItem.css'


const SliderBarItem = props => {
    return (
        <img className={classes.slider_bar_item} src={props.img.backgroundUrl} alt="" />
    )            
  
}

export default SliderBarItem;