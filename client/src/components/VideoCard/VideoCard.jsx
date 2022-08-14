import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { format } from "timeago.js"
import axios from 'axios'

export const Container = styled.div` 
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Wrapper = styled.div`

`
export const BoxVideo = styled.div`

`
export const VideoPost = styled.img`
  height: 140px;
  width: 220px;
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
const VideoCard = ({ type, video }) => {
  
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Container type={type}>
         <Link to={`/video/${video._id}`}>
        <BoxVideo>
          <VideoPost
            type={type}
            src={video.imgUrl}
          />
        </BoxVideo>
      </Link>
      <Link to={`/video/${video._id}`}>
        <BoxUser>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <UserImg
              type={type}
            //src={channel.img}
            />
            <Title>{video.title}</Title>
          </div>
          <Desc
          //  {channel.name}
          >
          </Desc>
          <Desc
            type={type}>
            {video.views} views {format(video.createdAt)}
          </Desc>
        </BoxUser>
      </Link>
    </Container>
  )
}
export default VideoCard