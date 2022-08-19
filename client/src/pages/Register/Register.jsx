import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import {
  Container,
  Wrapper,
  BoxRegister,
  Form,
  Input,
  Button,
  RegisterBtn
} from './RegisterStyle'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
 
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
        console.log(res.data)
        navigate("/login")
      } catch (err) {
   
    }
  };

  return (
    <Container>
      <Wrapper>
      <BoxRegister>
            <Form>
            <Input
                placeholder="nome"
                onChange={(e) => setName(e.target.value)}
                />
              <Input
                type='email'
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleRegister}
              >Cadastrar
              </Button>
              <RegisterBtn>
                <Link to='/login'>
                  Logar
                </Link>
              </RegisterBtn>
            </Form>
          </BoxRegister>
          </Wrapper>
    </Container>
  )
}

export default Register