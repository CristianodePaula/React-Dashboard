import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
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

export const Container = styled.div`
  flex: 2.5;
  background: ${({ theme }) => theme.bgGallery}
`
export const Wrapper = styled.div`
  padding: 20px 0px 0px 55px; 
`
export const BoxPost = styled.div`
  display: flex;
  flex-direction: column;  
`
export const VideoFrame = styled.video`
  height: 435px;
  width: 770px;
  object-fit: cover;
`
export const SpanKey = styled.div`  
  margin-top: 15px;
  font-size: 15px;
  color: royalblue;
`
export const Title = styled.h3`
  margin-top: 0px;
`
export const BoxInteraction = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: flex-start;
`
export const Item = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
`
export const Span = styled.span`
`
export const HR = styled.div`
  margin: 10px 0px;
  width: 100%;
  border-bottom: 0.1px solid gainsboro; 
`
export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`
export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
`
export const ImgUser = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
`
export const SpanName = styled.h3``

export const Button1 = styled.button`
  height: 40px;
  width: 100px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BoxComments = styled.div``

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

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
              Não Curtir
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
            <Comment />
          </BoxComments>
        </Wrapper>
      </Container>
    </>
  )
}

export default Video



/*
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
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
*/
