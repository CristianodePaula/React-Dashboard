import React from 'react'
import { dataKeys } from '../../resources/Data'
import {
  Container, 
  KeyMap,
  KeyName
} from './KeybarStye'

export const Keybar = () => {
  return (
    <Container>
      {dataKeys.map((keyname, index) => {
          return (
            <KeyMap key={index}>
              <KeyName> {keyname.nameKey} </KeyName>
            </KeyMap> 
          )
      })}
    </Container>
  )
}

export default Keybar
