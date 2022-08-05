import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar/Sidebar'
import Keybar from '../../components/Keybar/Keybar'
import VideoGallery from '../../components/VideoGallery/VideoGallery'


export const Container = styled.div`
  display: flex;  
  flex: 6;
  height: 92vh;
  width: 100vw;
  overflow: hidden;
  background: ${({ theme }) => theme.background}
`
export const Wrapper = styled.div`
`
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Home = () => {
  return (
    <>
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
//       <Sidebar />
export default Home