import React from 'react'
import styled from 'styled-components'
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import SlideshowIcon from '@mui/icons-material/Slideshow'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export const Container = styled.div`
  flex: 1.2;
  height: 90vh;
  overflow-y: scroll;
  background:  ${({ theme }) => theme.background}
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 0px 0px 10px 20px;
`
export const Icon = styled.a`
  color: black;
`
export const Text = styled.span`
  color: black;
  font-size: 14px;
`
export const HR = styled.div`
  margin: 10px 0px;
  width: 15vw;
  border-bottom: 0.1px solid gainsboro; 
`
export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  padding: 0px 0px 5px 20px;
`
export const Sidebar = () => {

  return (
    <Container>
      <Item>
        <Icon>
          <HomeIcon />
        </Icon>
        <Text>Início</Text>
      </Item>
      <Item>
        <Icon>
          <ExploreOutlinedIcon />
        </Icon>
        <Text>Explorar</Text>
      </Item>
      <Item>
        <Icon>
          <HomeIcon />
        </Icon>
        <Text>Shorts</Text>
      </Item>
      <Item>
        <Icon>
          <SubscriptionsOutlinedIcon />
        </Icon>
        <Text>Inscrições</Text>
      </Item>
      <HR />
      <Item>
        <Icon>
          <VideoLibraryOutlinedIcon />
        </Icon>
        <Text>Biblioteca</Text>
      </Item>
      <Item>
        <Icon>
          <HistoryOutlinedIcon />
        </Icon>
        <Text>Histórico</Text>
      </Item>
      <Item>
        <Icon>
          <SlideshowIcon />
        </Icon>
        <Text>Seus vídeos</Text>
      </Item>
      <Item>
        <Icon>
          <AccessTimeIcon />
        </Icon>
        <Text>Assistir mais tarde</Text>
      </Item>
      <HR />
      <Title>
        Inscrições
      </Title>
      <HR />
      <Title>
        Explorar
      </Title>
      <Item>
        <Icon>
        < LibraryMusicOutlinedIcon /> 
        </Icon>
      <Text>
        Musica
        </Text>
      </Item>
      <Item>
        <Icon>
        <SportsBasketballOutlinedIcon />
        </Icon>
        <Text> 
          Esportes
        </Text>
      </Item>
      <Item>
        <Icon>
        <SportsEsportsOutlinedIcon />
        </Icon>
        <Text>
        Jogos
        </Text>
      </Item>
      <Item>
        <Icon>
        <LocalMoviesIcon />
        </Icon>
        <Text>
        Filmes
        </Text>
      </Item>
      <Item>
        <Icon>
        <ArticleOutlinedIcon />
        </Icon>
        <Text>
        Notícias
        </Text>

      </Item>
      <Item>
        <Icon>
        <TipsAndUpdatesIcon />
        </Icon>
        <Text>
        Aprender
        </Text>
      </Item>
      <HR />
      <Title>
        Configurações
      </Title>
      <Item>
        <Icon>
        <SettingsIcon />
        </Icon>
       <Text>Configurações</Text>
      </Item>
      <Item>
        <Icon>
        <FlagOutlinedIcon />
        </Icon>
        <Text>
          Histórico de Denúncias
        </Text>
      </Item>
      <Item>
        <Icon>
        <HelpOutlineOutlinedIcon />
        </Icon>
       <Text>Enviar Feedback</Text>
      </Item>
   
    </Container>
  )
}

export default Sidebar
