import React from 'react'
import styled from 'styled-components'
import logo from '../../img/icon.png'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import MicIcon from '@mui/icons-material/Mic'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined"
import NotificationsIcon from '@mui/icons-material/Notifications'

export const Container = styled.div`
    height: 8vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 20px;
  margin-right: -30px;
`
export const Icon = styled.a`
  margin: 0px 20px 0px 0px; 
  cursor: pointer;
`
export const LogImg = styled.img`
  height: 30px;
`
export const LogoTitle = styled.span`
  text-transform: uppercase;
`
export const SearchBox = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
`
export const SearchBar = styled.input`
  width: 35vw;
  height: 5vh;
  padding-left: 5px;
  border: none;
`
export const UserBox = styled.div`
  width: 400px;
  margin-right: 10px;
`
export const UserImg = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`
export const Topbar = () => {
  return (
    <Container>
      <LogoBox>
        <Icon>
          <MenuIcon />
        </Icon>
        <LogImg src={logo} />
        <LogoTitle>ChrisTube</LogoTitle>
      </LogoBox>
      <SearchBox style={{marginLeft: '200px'}}>
        <SearchBar
          type='text'
          placeholder='Pesquisar'
        />
       <KeyboardIcon/>
       <SearchIcon />
      </SearchBox>
      <MicIcon style={{marginRight: '220px'}}/>
      <UserBox>
        <Icon>
          <VideoCallIcon />
        </Icon>
        <Icon>
          <NotificationsIcon />
        </Icon>
        <Icon>
          <SettingsBrightnessOutlinedIcon />
        </Icon>
        <UserImg src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </UserBox>
    </Container>
  )
}

export default Topbar
