import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div` 
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.type === "sm" ? "column" : "row")}; 
  padding-top: 20px;
  background: ${({ theme }) => theme.bgGallery};
`
export const Wrapper = styled.div``
export const BoxVideo = styled.div`
`
export const VideoPost = styled.img`
  height: ${(props) => (props.type === "sm" ? "140px" : "91px")};
  width: ${(props) => (props.type === "sm" ? "240px" : "156px")};
`
export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;   
  align-items: flex-start;
  width: 240px;
  margin-left: ${(props) => (props.type === "sm" ? "0px" : "10px")};
`
export const UserImg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  display: ${(props) => props.type === "sm" ? "block" : "none"};
` 
export const Title = styled.h3`
  font-size: 15px;
`
export const Desc = styled.span`
  font-size: 12px;
  margin-left: ${(props) => (props.type === "sm" ? "50px" : "0px")};
`
const VideoCard = ({ post, type }) => {
  return (
    <Container type={type}>
      <Link to='video:id'> 
      <BoxVideo> 
        <VideoPost type={type} src={post.videoURL} />
      </BoxVideo>
      </Link> 
      <Link to='video:id'> 
      <BoxUser>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <UserImg 
          type={type}
          src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Title>{post.title}</Title>
        </div>
        <Desc type={type}>{post.author}</Desc>
        <Desc type={type}>{post.desc} 2 meses</Desc>
      </BoxUser>
      </Link> 
    </Container>
  )
}
export default VideoCard



/*
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div` 
 display: flex;
`
export const CardBox = styled.div`
background: ${({ theme }) => theme.bgGallery};
height: 260px;
width: 260px;
display: flex;
flex-direction: column;
justify-content: center;
`
export const PostImg = styled.img`
  height: 140px;
  width: 240px;
`
export const UserTitle = styled.div`
  display: flex;
  align-items: center;
`
export const UserImg = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`
export const AuthorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: -10px;
`
export const Title = styled.h3`
  margin-left: 10px;
  font-size: 15px;
`
export const Desc = styled.span`
  font-size: 12px;
  margin-top: 5px;
`
const VideoCard = ({ post,  type }) => {
  return (
    <Container>
      <CardBox type={type}>
        <Link to='video:id'>
          <PostImg src={post.videoURL} />
          <UserTitle>
            <UserImg src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <Title>{post.title}</Title>
          </UserTitle>
          <AuthorBox>
            <Desc>{post.author}</Desc>
            <Desc>{post.desc} 2 meses</Desc>
          </AuthorBox>
        </Link>
      </CardBox>
    </Container>
  )
}
export default VideoCard

*/