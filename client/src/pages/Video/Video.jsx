import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import VideoBar from '../../components/SingleVideoBar/VideoBar'
import CommentCard from '../../components/CommentCard/CommentCard'

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
export const ImgPost = styled.img`
  height: 435px;
  width: 770px;
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

export const Button = styled.button`
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px;
`

export const BoxComments = styled.div``

const Video = () => {
  return (
    <>
      <Container>
        <Wrapper>

          <BoxPost>
            <ImgPost src='https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <SpanKey> #darktecnho #industrial #cyberpunk </SpanKey>
            <Title> Vida de Desenvolvedor </Title>
          </BoxPost>

          <BoxInteraction>
            <Item>
              <Span> 200 mil visualizações </Span>
            </Item>
            <Item>
              <ThumbUpOutlinedIcon style={{marginRight: '10px', cursor: 'pointer'}} />
              <Span>
                Gostos
              </Span>
            </Item>
            <Item>
              <ThumbDownOffAltOutlinedIcon style={{marginRight: '10px', cursor: 'pointer'}} />
              <Span>
                Não gostei
              </Span>
            </Item>
            <Item>
              <ReplyOutlinedIcon style={{marginRight: '10px', cursor: 'pointer'}}/>
              <Span>
                Compartilhar
              </Span>
            </Item>
            <Item>
              <AddTaskOutlinedIcon style={{marginRight: '10px', cursor: 'pointer'}} />
              <Span>
                Salvar
              </Span>
            </Item>
          </BoxInteraction>

          <HR />

          <BoxUser>
            <WrapperUser>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ImgUser src='https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <SpanName>
                  Fulano
                </SpanName>
              </div>
              <div>
                <Button >Inscreva-se</Button>
              </div>
            </WrapperUser>
            <div>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </div>
          </BoxUser>

          <HR />

          <BoxComments>  
          <h3>Comentários</h3>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
          </BoxComments>
        </Wrapper>
      </Container>
      <VideoBar />
    </>

  )
}

export default Video

