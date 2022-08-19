import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comment from '../../components/Comment/Comment'
import { useDispatch, useSelector } from "react-redux";
import { subscription } from "../../redux/userSlice";
import axios from 'axios'
import { dislike, fetchSuccess, like } from "../../redux/videoSlice";
import { format } from "timeago.js";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Comments from '../../components/Comments/Comments';
import {
  Container,
  Wrapper,
  BoxPost,
  VideoFrame,
  SpanKey,
  Title,
  BoxInteraction,
  Item,
  Span,
  HR,
  BoxUser,
  WrapperUser,
  ImgUser,
  SpanName,
  Button1,
  BoxComments,
  Buttons,
  Button
} from './VideoStyle'

const Video = () => {
  
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) { }
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  console.log(currentUser)
  console.log(currentVideo)

  return (
    <>
      <Container>
        <Wrapper>
          <BoxPost>
            <VideoFrame src={currentVideo.videoUrl} controls />
            <SpanKey> #tag1 #Tag2 </SpanKey>
            <Title>{currentVideo.title}</Title>
          </BoxPost>
          <BoxInteraction>
            <Item>
              <Span> {currentVideo.views} views • {format(currentVideo.createdAt)} </Span>
            </Item>
            <Buttons>
              <Button onClick={handleLike}>
                {currentVideo.likes?.includes(currentUser?._id) ? (
                  <ThumbUpIcon />
                ) : (
                  <ThumbUpOutlinedIcon />
                )}{" "}
                {currentVideo.likes?.length}
              </Button>
              <Button onClick={handleDislike}>
                {currentVideo.dislikes?.includes(currentUser?._id) ? (
                  <ThumbDownIcon />
                ) : (
                  <ThumbDownOffAltOutlinedIcon />
                )}{" "}
     
              </Button>
              <Button>
                <ReplyOutlinedIcon /> Share
              </Button>
              <Button>
                <AddTaskOutlinedIcon /> Save
              </Button>
            </Buttons>
          </BoxInteraction>
          <HR />
          <BoxUser>
            <WrapperUser>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ImgUser src={channel.img} />
                <SpanName>
                  {channel.name}
                </SpanName>
              </div>
              <div>
                <Button1 onClick={handleSub}>
                  {currentUser.subscribedUsers?.includes(channel._id)
                    ? "SUBSCRIBED"
                    : "SUBSCRIBE"}
                </Button1>
              </div>
            </WrapperUser>
            <div>
              {currentVideo.desc}
            </div>
          </BoxUser>
          <HR />
          <BoxComments>
            <h3>Comentários</h3>
            <Comments videoId={currentVideo._id} />
            <Comment />
          </BoxComments>
        </Wrapper>
      </Container>
     
    </>
  )
}

export default Video
