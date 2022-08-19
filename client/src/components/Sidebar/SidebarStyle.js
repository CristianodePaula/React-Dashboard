import styled from 'styled-components'

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