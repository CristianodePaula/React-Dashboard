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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { logout } from '../../redux/userSlice'
import axios from 'axios'

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

export const Topbar = ({ darkMode, setDarkMode }) => {

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
    navigate('/')
  }

  return (
    <Container>
      <LogoBox>
        <Icon>
          <MenuIcon style={{ marginRight: '20px' }} />
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
      <SearchBox >
        <SearchBar
          type='text'
          placeholder='Pesquisar'
        />
        <Icon>
          <KeyboardIcon style={{ paddingRight: '10px', fontSize: '18px' }} />
        </Icon>
        <SIconBox>
          <SearchIcon />
        </SIconBox>
      </SearchBox>
      <Icon>
        <MicIcon
          style={{
            marginRight: '220px',
            background: '#f9f9f9',
            padding: '5px',
            fontSize: '18px',
            borderRadius: '50%'
          }}
        />
      </Icon>
      <UserBox>
        {currentUser ? (
          <UserMiniBox>
            <Icon>
              <VideoCallIcon />
            </Icon>
            <Icon>
              <NotificationsIcon />
            </Icon>
            <Icon onClick={() => setDarkMode(!darkMode)}>
              <SettingsBrightnessOutlinedIcon />
            </Icon>
            <Icon onClick={handleLogout}>
              <LogoutIcon/>
            </Icon>
            <UserImg src={currentUser.img}  />
            {currentUser.name}
          </UserMiniBox>
          
        ) : (
          <>
            <Link to='login'>
              <Button>
                <AccountCircleIcon />
                <p style={{ marginLeft: '10px' }}>Fazer Login</p>
              </Button>
            </Link>
          </>
        )}
      </UserBox>
    </Container>
  )
}


//         <UserImg src={currentUser.img}  />
//'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

export default Topbar
