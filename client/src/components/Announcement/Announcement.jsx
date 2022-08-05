import React, { useState, useEffect, useRef } from 'react'
import { dataSlider } from '../../resources/Data'
import styled from 'styled-components'

export const Container = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #000;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 40px;
`
export const Image = styled.img`
    width: 300px;
    height: 300px;    
    object-fit: cover;
`

const Announcement = ({slides}) => {

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

    return (
        <Container>
            {dataSlider.map((slide, index) => (
                <div key={index}>
                    {index === current && (
                        <div>
                            <Image src={slide.url} />
                        </div>
                    )}
                </div>
            ))}
        </Container>
    )
}

export default Announcement