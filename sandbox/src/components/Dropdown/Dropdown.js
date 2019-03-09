import React from 'react';

import styled from 'styled-components';

import { locationData } from '../../data';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleUp, faAngleDown, faCheck);

const HeaderWrapper = styled.div`
    display: flex;
    border: 1px solid black;
    align-items: center;
    padding: 10px 15px;
    justify-content: center;
    border-radius: .2rem;
    cursor: pointer;

    h1 {
        font-size: 1.6rem;
        font-family: Poppins, sans-serif;
    }

    svg {
        margin-left: 15px;
    }
`

const ListWrapper = styled.ul`
    display: flex;
    border: 1px solid black;
    align-items: flex-start;
    padding: 10px 15px;
    border-top: none;
    flex-direction: column;
    border-radius: .2rem;

    h1 {
        font-size: 1.6rem;
    }

    li {
        font-size: 1.6rem;
        font-family: Poppins, sans-serif;
        padding: 4px 15px;
        cursor: pointer;
    }
`

const DropdownWrapper = styled.div`
    width: 200px;
    margin: 200px auto;
`

class Dropdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          titleHelper: "Location",
          title: "Select Location",
          location: locationData,
          listOpen: false,
        }
    }

    handleClickOutside() {
        this.setState({
          listOpen: false
        })
    }
      
    toggleList() {
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }

    toggleSelected(id, key){
      let temp = this.state[key]
      temp[id].selected = !temp[id].selected
      this.setState({
        [key]: temp
      })
    }
      
    render() {
        const{listOpen, location, title} = this.state
        return(
          <DropdownWrapper>
          <HeaderWrapper onClick={() => this.toggleList()}>
              <h1>{title}</h1>
              {listOpen
                ? <FontAwesomeIcon icon="angle-up" size="2x"/>
                : <FontAwesomeIcon icon="angle-down" size="2x"/>
              }
          </HeaderWrapper>
           {listOpen && <ListWrapper>
             {location.map((item) => (
               <li 
               className="dd-list-item" 
               key={item.id}
               onClick={() => this.toggleSelected(item.id, item.key)}
               >{item.title} {item.selected && <FontAwesomeIcon icon="check" />}</li>
              ))}
            </ListWrapper>}
          </DropdownWrapper>
        )
      }

}

export default Dropdown;