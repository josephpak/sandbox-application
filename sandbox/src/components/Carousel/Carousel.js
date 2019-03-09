import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled, {css} from 'styled-components';

import left from './left-arrow.png'
import right from './right-arrow.png'


const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }

  img {
    width: 100%;
    display: none;
  }
`

const CarouselButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;

  img {
    display: block;
  }

  ${props =>
    props.type === 'left' &&
    css`
      top: 50%;
      left: 25px;
    `}

    ${props =>
      props.type === 'right' &&
      css`
        top: 50%;
        right: 25px;
      `}  
`

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentIndex: 0
    }
  }
  
  componentDidMount(){
    this.setState({
      images: carouselData
    })
  }

  leftClick = () => {
    let lastIndex = this.state.images.length - 1;
    if (this.state.currentIndex === 0){
      this.setState({
        currentIndex: lastIndex
      })
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }))
    }
  }

  rightClick = () => {
    let lastIndex = this.state.images.length - 1;
    if (this.state.currentIndex === lastIndex){
      this.setState({
        currentIndex: 0
      })
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }))
    }
  }

  selectedImage = () => {
    return <img alt="Carousel" src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselWrapper>
        <CarouselButton type="left" onClick={this.leftClick}><img src={left} /></CarouselButton>
        <div>{this.selectedImage()}</div>
        <CarouselButton type="right" onClick={this.rightClick}><img src={right} /></CarouselButton>
      </CarouselWrapper>
    )
  }
}