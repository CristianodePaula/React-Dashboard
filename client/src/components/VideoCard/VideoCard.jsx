import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div` 
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
export const AuthorDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
`
export const Title = styled.h3`
margin-left: 10px;
  font-size: 15px;
`
export const Desc = styled.span`
  font-size: 12px;
  margin-top: 5px;
`
const VideoCard = ({ post }) => {
  return (
    <Container>
      <CardBox>
        <Link to='video:id'>
          <PostImg src={post.videoURL} />
          <UserTitle>
            <UserImg src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <Title>{post.title}</Title>
          </UserTitle>
          <AuthorDesc>
            <Desc>{post.author}</Desc>
            <Desc>{post.desc}</Desc>
          </AuthorDesc>
        </Link>
      </CardBox>
    </Container>
  )
}

export default VideoCard