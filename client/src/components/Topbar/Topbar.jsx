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
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 8vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background:  ${({ theme }) => theme.background}
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
`
export const SearchBar = styled.input`
  width: 35vw;
  height: 5vh;
  padding-left: 5px;
  border: none;
`
export const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px
`
export const UserImg = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`
export const Button = styled.button`
  margin-left: 10px;
`

export const Topbar = ({ darkMode, setDarkMode }) => {

  const user = false

  return (
    <Container>
      <LogoBox>
        <Icon>
          <MenuIcon />
        </Icon>
        <Link to='/'>
          <div
            style={{   
              display: 'flex',
              alignItems: 'center'
            }}
          >
          <LogImg src={logo} />
          <LogoTitle>ChrisTube</LogoTitle>
          </div>
        </Link>
      </LogoBox>
      <SearchBox style={{ marginLeft: '200px' }}>
        <SearchBar
          type='text'
          placeholder='Pesquisar'
        />
        <KeyboardIcon />
        <SearchIcon />
      </SearchBox>
      <MicIcon style={{ marginRight: '220px' }} />
      <UserBox>
        <Icon>
          <VideoCallIcon />
        </Icon>
        <Icon>
          <NotificationsIcon />
        </Icon>
        <Icon onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
        </Icon>
        {user ? (
          <UserImg src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        ) : (
          <Link to='login'>
            <Button>login</Button>
          </Link>
        )}




      </UserBox>
    </Container>
  )
}

// {darkMode ? "Light" : "Dark"}

export default Topbar
