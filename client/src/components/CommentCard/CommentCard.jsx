import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`
export const UserImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`
export const SpanComment = styled.span``

export const BoxInteractions = styled.div``

function CommentCard() {
    return (
        <Container>
        
            <div style={{ display: 'flex' }}>
            
                <UserImg src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <div  style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                    <SpanComment> <b>Beltrano</b> 1 mês </SpanComment>
                    <SpanComment>Gostei muito deste post</SpanComment>
                </div>
            </div>
            <BoxInteractions>
            </BoxInteractions>
        </Container>
    )
}

export default CommentCard
