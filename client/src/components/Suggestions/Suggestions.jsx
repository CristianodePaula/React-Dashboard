import React from 'react'
import styled from 'styled-components'
import VideoCard from '../VideoCard/VideoCard'
import { videoData } from '../../resources/Data'

export const Container = styled.div` 
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Suggestions = () => {
  return (
    <Container>
      <Wrapper>
         {videoData.map((post, index) => {
           return (
           <VideoCard post={post}/>
           )
          })}
      </Wrapper>
    </Container>
  )
}

export default Suggestions