import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format } from "timeago.js"
import axios from 'axios'
import {
  Container,
  BoxVideo,
  VideoPost,
  BoxUser,
  UserImg,
  Title,
  Desc
} from './VideoCardStyle'

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