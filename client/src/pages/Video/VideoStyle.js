
import styled from 'styled-components'

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
export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`