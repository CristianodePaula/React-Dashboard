import styled from 'styled-components'

export const Container = styled.div`
  flex: 6;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  background: ${({ theme }) => theme.background};
`
export const Wrapper = styled.div`
  height: 450px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`
export const BoxSocial = styled.div``
export const Social = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  &:hover { 
    transform: scale(1.05); 
    transition: all 0.3s ease 
  } 
`
export const Image = styled.img`
  height: 20px;
  widht: 40px;
`
export const BoxRegister = styled.div`
  margin-top: 30px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Input = styled.input`
  height: 8px;  
  width: 220px;
  background: aliceblue;
  border: 1px solid grey;
  padding: 10px;  
  margin-bottom: 25px;
  outline: 0px;
  ::placeholder {
    font-size: 16px;
}
`
export const Button = styled.button`
  background: mediumseagreen;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 120px;
  cursor: pointer;
  &:hover {
    background: orange; 
    transform: scale(1.05); 
    transition: all 0.3s ease 
  }
`
export const RegisterBtn = styled.span`
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-top: 20px;
  cursor: pointer;  
  &:hover {
    transform: scale(1.05); 
    transition: all 0.3s ease-in-out; 
  } 
`