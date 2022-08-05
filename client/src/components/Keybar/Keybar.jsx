import React from 'react'
import styled from 'styled-components'
import { dataKeys } from '../../resources/Data'

export const Container = styled.div`
  height: 9vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid lightgray; 
  border-top: 1px solid lightgray;   
`
export const KeyMap = styled.div`  
  background: whitesmoke;
  padding: 5px 10px 5px 10px;
  border: 1px solid grey;
  border-radius: 20px;
  cursor: pointer;
`
export const KeyName = styled.span`
  padding: 20px;
` 
export const Keybar = () => {
  return (
    <Container>
      {dataKeys.map((keyname, index)=> {
        return (
          <KeyMap id={index}>
              <KeyName> {keyname.nameKey} </KeyName>
          </KeyMap>
        )
      })}
    </Container>
  )
}

export default Keybar
