import React, {useState} from 'react'
import StudioMenu from '../../components/StudioMenu/StudioMenu'
import { videoData } from '../../resources/Data'
import Upload from '../../components/Upload/Upload'
import {
  Container,
  Table,
  THead,
  THeadTR,
  TH,
  TBody,
  TBodyTR,
  TD,
  Img,
  BtnEdit,
} from './StudioStyle' 
const Studio = () => {

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <StudioMenu />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        Conteúdo do Canal
      <button  onClick={() => setOpen(true)} 
      style={{
        width: '60px'
      }}
      >Criar</button>
        {open && <Upload setOpen={setOpen} />}
      <Table>
            <THead>
              <THeadTR>
                <TH>Video</TH>
                <TH>Título</TH>
                <TH>Visualizações</TH>
                <TH>Data</TH>
                <TH>Excluir</TH>
              </THeadTR>
            </THead>
            <TBody>
            {videoData.slice(0, 4).map((video) => {
                return (
                  <TBodyTR key={video.id}>
                    <TD>
                      <Img src={video.videoURL
                        ||
                        "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                      } />
                    </TD>
                    <TD>{video.title}</TD>
                    <TD>{video.title}</TD>
                    <TD>{video.desc}</TD>
                    <TD>
                      <BtnEdit
                        type="button"
                      > Excluir
                      </BtnEdit>
                    </TD>
                  </TBodyTR>
                )
              })}
            </TBody>
          </Table>
          </div>
    </Container>
  )
}

export default Studio