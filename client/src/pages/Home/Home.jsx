import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar/Sidebar'
import Keybar from '../../components/Keybar/Keybar'
import VideoCard from '../../components/VideoCard/VideoCard'
import axios from 'axios'

export const Container = styled.div`
  display: flex;  
  background: ${({ theme }) => theme.background}
`
export const Wrapper = styled.div`
  display: flex;
`
export const VideoGallery = styled.div`
  display: grid;
  justify-content: center;
  width: 83.5vw;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: scroll;
  margin-top: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Home = ({ type }) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <>
      <Container>
        <Wrapper>
          <Sidebar />
          <div>
            <Keybar />
            <VideoGallery>
              {videos.map((video) => (
                <VideoCard key={video._id} video={video} />
              ))}
            </VideoGallery>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Home