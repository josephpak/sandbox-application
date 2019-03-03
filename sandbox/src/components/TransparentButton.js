import React from 'react'
import styled from 'styled-components';

const TransparentButtonWrapper = styled.button`
    height: 37px;
    line-height: 37px;
    padding: 0 16px;
    border: 1px solid black;
    border-radius: 4px;
    color: black;
    cursor: pointer;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    margin: 2%;

    &:focus {
        outline: none;
    }

    ${props => (props.type === 'add' ? `color: #03a87c; border-color: #03a87c` : null)}
    ${props => (props.type === 'delete' ? `color: #C13C14; border-color: #E4410D` : null)}
`

const TransparentButton = props => {
  return (
    <> 
        <TransparentButtonWrapper
        type={props.type}
        >
        {props.text}
        </TransparentButtonWrapper>
    </>
  )
}

export default TransparentButton;