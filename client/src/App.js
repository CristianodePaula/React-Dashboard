import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from "./resources/Theme"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import styled from 'styled-components'
import Topbar from './components/Topbar/Topbar'
import Video from './pages/Video/Video'
import Studio from './pages/Studio/Studio'
import FeedBack from './pages/FeedBack/FeedBack'
import Search from './components/Search/Search'

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
              <Route path="/">
              <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route index element={<Home type="random" />} />
                <Route path="trends" element={<Home type="trend" />} />
                <Route path="subscriptions" element={<Home type="sub" />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
                <Route path='studio' element={<Studio />}/>
                <Route path='feedback' element={<FeedBack />}/>
                <Route path="search" element={<Search />} />
              </Route>
            </Routes>
          </Wrapper>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}
 
export default App