import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "./resources/Theme"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import styled from 'styled-components';
import Topbar from './components/Topbar/Topbar';
import Video from './pages/Video/Video'

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
  display: flex;
`
function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Container>
          <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Wrapper>
              <Routes>
                  <Route path="/"element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="video:id" element={<Video/>} />
              </Routes>
            </Wrapper>
          </Container>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App