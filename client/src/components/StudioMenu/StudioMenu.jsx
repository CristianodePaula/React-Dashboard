import React from 'react'
import { MdVideoLibrary } from "react-icons/md"
import {
    Container, 
    BoxUser, 
    UserImg, 
    HR, 
    BoxMenu, 
    Item, 
    Icon, 
    Text, 
    BoxConfig 
} from './StudioMenuStyle'

export const StudioMenu = () => {

    return (
        <Container>
            <BoxUser>
                <UserImg src='https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <h1>Seu Canal</h1>
                <span>@user</span>
            </BoxUser>
            <HR />
            <BoxMenu>
                <Item>
                    <Icon>
                        <MdVideoLibrary />
                    </Icon>
                    <Text>Painel</Text>
                </Item>

                <Item>
                    <Icon>
                        
                    </Icon>
                    <Text>Conteúdo</Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Playlists</Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Estatísticas</Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Comentários</Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Legendas</Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Seus vídeos</Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Assistir mais tarde</Text>
                </Item>


                <Item>
                    <Icon>

                    </Icon>
                    <Text>
                        Musica
                    </Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>
                        Esportes
                    </Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>
                        Jogos
                    </Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>
                        Filmes
                    </Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>
                        Notícias
                    </Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>
                        Aprender
                    </Text>
                </Item>
            </BoxMenu>

            <HR />

            <BoxConfig>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Configuração</Text>
                </Item>

                <Item>
                    <Icon>

                    </Icon>
                    <Text>Enviar Feedback</Text>
                </Item>

            </BoxConfig>

        </Container>
    )
}

export default StudioMenu
