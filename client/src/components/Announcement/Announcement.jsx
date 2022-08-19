import React, { useRef, useState, useEffect } from 'react'
import {
    Container,
    ImgA,
    TextContainer,
    Title,
    Desc
} from './AnnouncementStyle'

function Announcement() {

    /*
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)
    
    useEffect(
        () => {
            const passSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1))
            }
            timeout.current = setTimeout(passSlide, 3000)
    
            return function () {
                if (timeout.current) {
                    clearTimeout(timeout.current)
                }
            }
        }, [current, length])
    */

    return (
        <Container>
            <ImgA src='https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <TextContainer>
                <Title>Título</Title>
                <Desc>Descrição</Desc>
            </TextContainer>
        </Container>
    )
}

export default Announcement