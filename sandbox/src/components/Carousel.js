import React, { Component } from 'react';
import { carouselData } from '../../src/data';
import styled, {css} from 'styled-components';

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
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  ${props =>
    props.type === 'left' &&
    css`
      top: 50%;
      left: 25px;
      transform: translate(0, -50%);
    `}

    ${props =>
      props.type === 'right' &&
      css`
        top: 50%;
        right: 25px;
        transform: translate(0, -50%);
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
        <CarouselButton type="left" onClick={this.leftClick}>{"<"}</CarouselButton>
        <div>{this.selectedImage()}</div>
        <CarouselButton type="right" onClick={this.rightClick}>{">"}</CarouselButton>
      </CarouselWrapper>
    )
  }
}