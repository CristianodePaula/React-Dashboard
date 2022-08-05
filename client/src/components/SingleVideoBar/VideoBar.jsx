import React from 'react'
import styled from 'styled-components'
import Announcement from '../Announcement/Announcement'
import Suggestions from '../Suggestions/Suggestions'
import { dataSlider } from '../../resources/Data'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 20px 70px 0px 0px;
`
const VideoBar = () => {
  return (
    <Container>
      <Announcement  slides={dataSlider}/>
      <Suggestions />
    </Container>
  )
}

export default VideoBar