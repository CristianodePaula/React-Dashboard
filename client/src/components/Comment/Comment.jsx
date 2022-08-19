import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
    Container, 
    UserImg, 
    SpanComment, 
    BoxInteractions 
} from "./CommentStyle";

function Comment({ comment }) {

    const [channel, setChannel] = useState({});
  
    useEffect(() => {
      const fetchComment = async () => {
        const res = await axios.get(`/users/find/${comment.userId}`);
        setChannel(res.data)
      };
      fetchComment();
    }, []);


    //console.log(comment)
  
    return (
        <Container>
            <div style={{ display: 'flex' }}>
                <UserImg src='' />
                <div  style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                    <SpanComment> <b>Beltrano</b> 1 mês </SpanComment>
                    <SpanComment>Gostei muito deste post</SpanComment>
                </div>
            </div>
            <BoxInteractions>
            </BoxInteractions>
        </Container>
    )
}

export default Comment
