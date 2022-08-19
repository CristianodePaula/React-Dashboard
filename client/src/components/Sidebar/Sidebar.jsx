import React from 'react'
import HomeIcon from "@mui/icons-material/Home"
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined"
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined"
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined"
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined"
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined"
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined"
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SettingsIcon from '@mui/icons-material/Settings'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import { Link } from 'react-router-dom'
import {
  Container,
  Item,
  Icon,
  Text,
  HR,
  Title
} from './SidebarStyle'

export const Sidebar = () => {

  return (
    <Container>
      <Link to='/'>
        <Item>
          <Icon>
            <HomeIcon />
          </Icon>
          <Text>Início</Text>
        </Item>
      </Link>
      <Link to="/trends">
        <Item>
          <Icon>
            <ExploreOutlinedIcon />
          </Icon>
          <Text>Explorar</Text>
        </Item>
      </Link>
      <Link to='/subscriptions'>
        <Item>
          <Icon>
            <HomeIcon />
          </Icon>
          <Text>Shorts</Text>
        </Item>
      </Link>
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
      <Link to='/feedback'>
        <Item>
          <Icon>
            <HelpOutlineOutlinedIcon />
          </Icon>
          <Text>Enviar Feedback</Text>
        </Item>
      </Link>
    </Container>
  )
}

export default Sidebar
