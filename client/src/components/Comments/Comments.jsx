import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "../Comment/Comment";
import {
  Container,
  NewComment,
  Avatar,
  Input,
  Button
} from './CommentsStyle'

const Comments = ({ videoId }) => {

  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) { }
    };
    fetchComments();
  }, [videoId]);

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/comments", { desc });
        console.log(res.data)
  } catch (err) {
   
    }
  };

  // const res = await axios.post(`http://localhost:5000/api/comments/${videoId}`, { desc });

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img}/> 
        <Input 
        placeholder="Adicionar novo comentário..."
        onChange={(e) => setDesc(e.target.value)}
        />
         <Button onClick={handleComment}> Enviar Comentário</Button>
      </NewComment>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
     
    </Container>
  );
};

export default Comments;