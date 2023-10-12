import { useState } from 'react'
import { ReactSVG } from 'react-svg'

import './slider.css'
import ArrowLeft from '../../assets/slider-arrow-left.svg'
import ArrowRight from '../../assets/slidder-arrow-right.svg'
import ArrowLeftBlack from '../../assets/slider-arrow-left-black.svg'
import ArrowRightBlack from '../../assets/slidder-arrow-right-black.svg'

export default function CSlider (props) {
    const [imgActive, setImgActive] = useState(0)

    const previous = () => {
        imgActive >= 1 ? setImgActive(imgActive-1) : setImgActive(props.data.length-1)
    }
    const next = () => {
        imgActive < (props.data.length - 1) ? setImgActive(imgActive+1) : setImgActive(0)
    }
    return(
        <div className='c-slider'>
            <h2 className='c-slider__title'>{props.title}</h2>
            {/* <img src={props.slider1} alt="" /> */}
            <div className='c-slider__carousel-container'> 
                <div className='c-slider__carousel-image-left'>
                    {(imgActive - 1) >= 0 ? <img src={props.data[imgActive - 1].imgPath} alt="" className='c-slider__carousel-image'/> : <img src={props.data[props.data.length - 1].imgPath} alt="" className='c-slider__carousel-image'/>}
                </div> 
                <div className='c-slider__carousel-image-central'>
                    <div className='c-slider__carousel-controls'>
                        <div className='c-slider__carousel-controls__previous' onClick={previous}>
                            {props.controlColor === "black" ? <ReactSVG src={ArrowLeftBlack} className='c-slider__carousel__arrow-control'/> : <ReactSVG src={ArrowLeft} className='c-slider__carousel__arrow-control'/>}
                        </div>
                        <div className='c-slider__carousel-controls__next' onClick={next}>
                            {props.controlColor === "black" ? <ReactSVG src={ArrowRightBlack} className='c-slider__carousel__arrow-control'/> : <ReactSVG src={ArrowRight} className='c-slider__carousel__arrow-control'/>}
                        </div>
                        <div className='c-slider__carousel-controls__dots'>
                            {props.data.map((img) => {
                            return img.id === imgActive ? <div className='c-slider__carousel-controls__dot__active'></div> : <div className='c-slider__carousel-controls__dot'></div>
                            })}
                        </div>
                    </div>
                    <img src={props.data[imgActive].imgPath} alt="" className='c-slider__carousel-image-selected'/>
                </div>
                <div className='c-slider__carousel-image-right'>
                    {(imgActive + 1) <= (props.data.length - 1) ? <img src={props.data[imgActive + 1].imgPath} alt="" className='c-slider__carousel-image'/> : <img src={props.data[0].imgPath} alt="" className='c-slider__carousel-image'/>}
                </div>
            </div>
        </div>
    )
}