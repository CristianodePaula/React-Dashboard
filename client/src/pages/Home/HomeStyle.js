import styled from 'styled-components'

export const Container = styled.div`
  display: flex;  
  background: ${({ theme }) => theme.background}
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