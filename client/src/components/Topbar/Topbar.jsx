import React, {useState} from 'react'
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
import Settings from '../Settings/Settings'
//import axios from 'axios'
import {
  Container,
  LogoBox,
  Icon,
  LogImg,
  LogoTitle,
  SearchBox,
  SearchBar,
  SIconBox,
  UserBox,
  UserImg,
  Button,
  UserMiniBox
} from './TopbarStyle'
 
export const Topbar = ({ darkMode, setDarkMode }) => {

  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

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
      <SearchBox>
        <SearchBar
          type='text'
          placeholder='Pesquisar'
          onChange={(e) => setQ(e.target.value)}
        />
        <Icon>
          <KeyboardIcon style={{ paddingRight: '10px', fontSize: '18px' }} />
        </Icon>
        <SIconBox>
          <SearchIcon  onClick={()=>navigate(`/search?q=${q}`)}/>
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
            <Link to='/studio'>
            <Icon>
              <VideoCallIcon/>
            </Icon>
            </Link>
            <Icon>
              <NotificationsIcon />
            </Icon>
            <Icon onClick={() => setDarkMode(!darkMode)}>
            {open && <SettingsBrightnessOutlinedIcon /> }
            </Icon>
            <Icon onClick={handleLogout}>
              <LogoutIcon/>
            </Icon>
            <UserImg src={currentUser.img}  />
           <span>{currentUser.name}</span> 
          </UserMiniBox>
        ) : (
          <>
            <Link to='login'>
              <Button onClick={() => setOpen(true)} >
                <AccountCircleIcon />
                <p style={{ marginLeft: '10px' }}>Fazer Login</p>
              </Button>
              {open && <Settings setOpen={setOpen} />}
            </Link>
          </>
        )}
      </UserBox>
    </Container>
  
  )
}

export default Topbar
