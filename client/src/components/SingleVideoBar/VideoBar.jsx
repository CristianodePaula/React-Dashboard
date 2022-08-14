import React from 'react'
import styled from 'styled-components'
import Suggestions from '../Suggestions/Suggestions'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`
const VideoBar = () => {
  return (
    <Container>
      <Suggestions />
    </Container>
  )
}

export default VideoBar