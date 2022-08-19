import styled from 'styled-components'

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