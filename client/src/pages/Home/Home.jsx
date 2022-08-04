import React from 'react'
import styled from 'styled-components'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Keybar from '../../components/Keybar/Keybar'
import VideoGallery from '../../components/VideoGallery/VideoGallery'

export const Container = styled.div`
  display: flex;  
  height: 92vh;
  width: 100vw;
  overflow: hidden;
`
export const Wrapper = styled.div`
  flex: 6;   
`
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Home = () => {
  return (
    <>
      <Topbar />
      <Container>
        <div style={{
          display: 'flex',
          
        }}>
        
        <Sidebar />
        <div>
        <Keybar />
        <VideoGallery />
        </div>
        </div>
        
        
      </Container>
    </>
  )
}

export default Home