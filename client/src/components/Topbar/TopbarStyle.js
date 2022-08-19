

import styled from 'styled-components'
export const Container = styled.div`
    height: 9vh;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.background}
`
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-right: -30px;
`
export const Icon = styled.a`
  margin-left: 10px; 
  cursor: pointer;
`
export const LogImg = styled.img`
  height: 30px;
`
export const LogoTitle = styled.span`
  text-transform: uppercase;
`
export const SearchBox = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 200px;
`
export const SearchBar = styled.input`
  width: 35vw;
  height: 5vh;
  padding-left: 10px;
  border: none;
`
export const SIconBox = styled.div`
  border-left: 1px solid silver;
  width: 50px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`
export const UserImg = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 15px;
`
export const Button = styled.button`
  height: 30px;
  width: 120px;
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: -30px;
`
export const UserMiniBox = styled.div`
  margin-left: -100px;
`