import React from 'react'
import styled from 'styled-components'
import VideoBar from '../../components/SingleVideoBar/VideoBar'


export const Container = styled.div`
  height: 20vh;
  width: 20vw;
  flex: 2.5;
`
export const Wrapper = styled.div`
  padding: 20px 0px 0px 60px;
`
export const ImgPost = styled.img`
  height: 400px;
  width: 760px;
`
export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2``
export const Desc = styled.span``
export const Comments = styled.input``

const Video = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ImgPost src='https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <BoxText>
          <Title>Vida de Desenvolvedor</Title>
          <Desc>200 mil visualizações</Desc>
          <Comments type='text' />
          </BoxText>
        </Wrapper>
      </Container>
      <VideoBar />
    </>

  )
}

export default Video

