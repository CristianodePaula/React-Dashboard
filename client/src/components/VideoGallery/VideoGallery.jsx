import React from 'react'
import styled from 'styled-components'
import VideoCard from '../VideoCard/VideoCard'
import { videoData } from '../../resources/Data'

export const Container = styled.div`
    height: 83vh;
    width: 84vw;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    overflow-y: scroll;
    background: ${({ theme }) => theme.bgGallery}
  `
  export const Img = styled.img`
  height: 140px;
  width: 220px;
`
export const Title = styled.h3`
  margin-top: 0px;
`
export const Desc = styled.span`
  margin-top: -10px;
`
const VideoGallery = ({post}) => {
  return (
    <Container>
        {videoData.map((post, index) => {
           return (
           <VideoCard post={post}/>
           )
          })}
    </Container>
  )
}

export default VideoGallery